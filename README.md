# HarshJeen InfoTech

The company landing page for HarshJeen InfoTech, the parent company behind the apps and websites I build. It introduces the company, highlights its products, and links to the founder's independently maintained portfolio.

## Portfolio

- [Pinky Promise](https://www.pinky-promise.app) — an iPhone app for making screen-time promises on your own or with someone you trust.
- [Prarthan Agarwal](https://www.prarthanagarwal.com) — the founder's personal portfolio.

HarshJeen InfoTech is registered in India under GSTIN **24GNXPP5076B1ZI**.

## Development

This project uses Vite, React, TypeScript, and TanStack Start.

```sh
bun install
npm run dev
```

To create a production build or run the local checks:

```sh
npm run build
npm run lint
npm test
```

## Project notes

- The company landing page lives at the `/` route.
- Product and founder links point to their own websites so those properties can be maintained independently.
- Website preview images live in `public/site-previews/`; the original illustrated hero lives in `public/art/`.
- Shared UI dependencies are pre-optimized in `vite.config.ts` to keep React stable in open preview sessions.

This project is connected to [Lovable](https://lovable.dev). Changes committed to the connected branch sync to the Lovable editor. Avoid rewriting published Git history.
