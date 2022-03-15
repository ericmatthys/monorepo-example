import 'abort-controller/polyfill';
import { JSONObject } from 'core/types/json';

export class RequestError extends Error {
  public statusCode: number;
  public statusText: string;

  public constructor(url: string, statusCode: number, statusText: string) {
    super(`REQUEST_ERROR: (${statusCode}) ${url}`);

    // Use `statusCode` instead of `status` to align with the extended Next.js
    // error type in `NextPageContext`.
    this.statusCode = statusCode;
    this.statusText = statusText;

    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export enum HTTPMethod {
  Delete = 'DELETE',
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
}

export interface FetchOptions extends Omit<RequestInit, 'body' | 'method'> {
  body?: JSONObject;
  method?: HTTPMethod;
  timeout?: number;
  AbortController?: AbortController;
}

export default async function fetchJson<ResponseType extends object>(
  url: string,
  options: FetchOptions = {}
): Promise<ResponseType> {
  const { timeout, ...requestOptions } = options;
  const controller = new globalThis.AbortController();
  let timeoutID;

  if (timeout) {
    timeoutID = globalThis.setTimeout(() => {
      if (process.env.NODE_ENV !== 'test') {
        globalThis.console.error('Fetch timeout:', url);
      }
      controller.abort();
    }, timeout);
  }

  const init: RequestInit = {
    ...requestOptions,
    signal: controller.signal,
    body: requestOptions.body ? JSON.stringify(requestOptions.body) : undefined,
    headers: {
      ...requestOptions.headers,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  // `fetch` is automatically polyfilled by Next.js
  const response = await globalThis.fetch(url, init);

  if (timeoutID) {
    globalThis.clearTimeout(timeoutID);
  }

  if (!response.ok) {
    throw new RequestError(url, response.status, response.statusText);
  }

  return response.status === 204 ? {} : response.json();
}
