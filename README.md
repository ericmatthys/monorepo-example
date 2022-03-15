## Getting Started

1. Install [Volta](https://docs.volta.sh/guide/getting-started)
2. Install package dependencies
3. Start the dev servers
4. Go to [localhost:3000](http://localhost:3000) (watch) or
   [localhost:3001](http://localhost:3001) (www)

```bash
curl https://get.volta.sh | bash
yarn
yarn dev
```

### Monorepo Notes

- `core` is not built separately from the Next.js apps. Code in `core` will be
  transpiled, prefixed, polyfilled, etc the same as code in `watch` and `www`.
  When Next.js changes to target modern browsers
  (https://github.com/vercel/next.js/discussions/33227), this will automatically
  apply to `core` as well. Any custom babel transforms like
  `babel-plugin-jsx-remove-data-test-id` also automatically apply.
- `core` does not manage a tree of exports and index files. It's assumed
  anything exported from a module in `core` can be imported by `watch` or `www`.
- We prefer absolute / deep imports except for siblings. We like the consistency
  and convenience from not managing complex relative imports. With
  `next-transpile-modules`, deep imports should also mean less work as `core`
  grows.
- A common `baseUrl` in `packages` is used to ensure compatibility with Next.js
  builds and tsc. An absolute import will look the same in all packages, which
  also helps a little with portability.
- TypeScript project references with `composite: true` is used with type
  checking to avoid duplicating work when type checking `watch` and `www`.
  Turborepo is configured to check `core` first, then `watch` and `www` can use
  its declaration files. This works out of the box in VSCode as it still can use
  source files without running tsc. No `typesVersions` configuration is needed.
  The downside to this is `composite: true` is not compatible with Next.js type
  checking before a build (https://github.com/vercel/next.js/pull/35270). For us,
  this is not critical since we type check as part of our own CI pipeline before a
  commit ever lands in staging or production, but for others this may be a big
  downside.
- There are some gotchas with linters and extensions. The VSCode ESLint
  extension has a convenient `workingDirectories` setting so VSCode can match CLI
  behavior when running ESLint on a file in a package. This is important when it
  comes to more complicated rules like `import/no-extraneous-dependencies` (ESLint
  will shout if you try to cross-import between `watch` and `www` for example).
  Each package is responsible for its own root ESLint config. We also run ESLint
  outside of packages to catch various other config files and documentation.
- Prettier and Stylelint extensions do not have a similar setting, so from
  within VSCode they are always run from the root. To match that behavior on the
  CLI, we do not use Turborepo to run Prettier or ESLint per package.
- There's not really a good way that I found to share public assets between
  `watch` and `www`, so you'll see the font is in both packages for example.
- At the very least, I think the documentation for `Ignored Build Step` should
  mention the limitation of only working when deploying single commits at a time.
  This limitation makes the setting not very useful in a lot of setups so it's
  worth calling out upfront.
