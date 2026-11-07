# Crossing dApp

Web front end for [Crossing Protocol](https://github.com/crossing-finance-org/crossing):
single-price auctions for private-market RWAs on Stellar.

The current scope is the public landing page. Issuer and investor flows
(auction directory, participation, sealed-bid vault, claims and portfolio) come
later and are specified in the protocol repository's
[architecture §13](https://github.com/crossing-finance-org/crossing/blob/main/ARCHITECTURE.md#13-full-application-and-stellar-integration).

## Stack

- Next.js 16 (App Router, Turbopack), React 19, TypeScript
- Tailwind CSS 4 with shadcn/ui components (`base-nova` style, Base UI primitives)
- Geist and Geist Mono through `next/font` (self-hosted at build time)

The protocol architecture names React with a static Vite build as its reference
client. This app uses Next.js instead; the landing page is fully static.

## Develop

Requires Node.js 22 LTS or newer and pnpm.

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm lint
pnpm typecheck
pnpm build
```

## Layout

```text
app/                     # layout, page, global styles and design tokens, icon
components/brand/        # logo mark and wordmark
components/site/         # header and footer
components/landing/      # hero, histogram and landing sections
components/ui/           # shadcn/ui components (owned source)
lib/site.ts              # site copy and outbound links
```

The hero and its animated clearing histogram follow the "Accueil B —
Histogramme" board of the Crossing Identity Claude Design file. The colour
tokens in `app/globals.css` come from the same board. Landing copy below the
hero is drawn from the protocol README and must not claim more than it does:
the contracts are a Testnet proof of concept, without Mainnet deployment or an
external audit.

`Launch app` and `Launch an auction` link to `#` until the app routes exist
(`site.links.app` and `site.links.launchAuction` in `lib/site.ts`).

## License

Apache-2.0. See [LICENSE](LICENSE) and [NOTICE](NOTICE). Geist fonts are
distributed under the SIL Open Font License.
