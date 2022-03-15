export function isProdEnv(): boolean {
  return process.env.NEXT_PUBLIC_VERCEL_ENV === 'production';
}

export function isPreviewEnv(): boolean {
  return process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview';
}

export function isDevEnv(): boolean {
  return process.env.NEXT_PUBLIC_VERCEL_ENV === 'development';
}

export function isTestEnv(): boolean {
  return process.env.NODE_ENV === 'test';
}
