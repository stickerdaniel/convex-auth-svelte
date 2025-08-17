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

### OAuth Providers Setup

This project supports GitHub and Google OAuth authentication.

#### Google OAuth Setup

1. Create a Google OAuth app in the [Google Cloud Console](https://console.cloud.google.com/)
2. Set the callback URL to: `https://[your-deployment-name].convex.site/api/auth/callback/google`
3. Set the required environment variables in Convex:

```bash
bunx convex env set AUTH_GOOGLE_ID your_google_client_id
bunx convex env set AUTH_GOOGLE_SECRET your_google_client_secret
```

For development, use your dev deployment URL. For production, use your production deployment URL.

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
