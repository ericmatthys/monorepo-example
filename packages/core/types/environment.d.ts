declare namespace NodeJS {
  // Merge the existing `ProcessEnv` definition with ours.
  // https://www.typescriptlang.org/docs/handbook/declaration-merging.html#merging-interfaces
  export interface ProcessEnv {
    NEXT_PUBLIC_VERCEL_ENV: string;
    VERCEL_ENV: string;
  }
}
