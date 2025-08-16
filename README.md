# Documentations

- Svelte TODO
- [`Sveltekit`](src/lib/sveltekit/README.md)

## Setup

Set CONVEX_DEPLOYMENT and PUBLIC_CONVEX_URL in .env.local

```bash
bun install
bunx convex dev
bun run setupAuth.mjs
```

# Test setup

Set AUTH_E2E_TEST_SECRET=test-secret
PUBLIC_E2E_TEST=true in .env.test
```bash
bunx convex env set AUTH_E2E_TEST_SECRET test-secret
```

```bash
bunx convex run tests:init
bunx playwright install
```

## Run tests (unit and e2e)

```bash
bun run test
```