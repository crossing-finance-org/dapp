// SPDX-License-Identifier: Apache-2.0
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { Section } from "./section";

const directions = [
  {
    tag: "Sale",
    title: "Distribute inventory",
    body: "The issuer escrows a fixed quantity of RWA tokens. Buyers submit quantities and maximum prices, backed by deposits in the settlement asset. Higher-priced bids receive priority.",
    detail:
      "If demand exceeds the inventory, the marginal price sets the clearing price and equal-price marginal bids share the remaining quantity pro rata. An undersubscribed sale uses its reserve price if the minimum-fill condition is met.",
  },
  {
    tag: "Buyback",
    title: "Repurchase within a budget",
    body: "The issuer escrows a settlement-asset budget. Token holders submit the quantities they want to sell and their minimum prices, depositing the RWA tokens with their bids. Lower-priced asks receive priority.",
    detail:
      "Allocations clear at a common price while total payments stay within the funded budget.",
  },
];

const bidding = [
  {
    tag: "Open bids",
    body: "Prices and quantities are visible as they are placed.",
  },
  {
    tag: "Sealed bids",
    body: "Participants deposit collateral and submit a hash binding their bid to the auction, then reveal price, quantity and secret after bidding ends. Valid reveals enter clearing; unrevealed bids do not set the price. Deposits, addresses and timing stay public.",
  },
];

export function AuctionModes() {
  return (
    <Section
      id="auctions"
      eyebrow="Sales and buybacks"
      title="Two directions, one clearing rule."
      lead="Each auction fixes its RWA token, settlement asset, price range, minimum fill and deadlines when it is created. Prices are denominated in a Stellar-issued settlement asset, such as a stablecoin."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {directions.map((d) => (
          <Card key={d.tag} className="gap-5 py-6 [--card-spacing:--spacing(6)]">
            <CardHeader>
              <p className="font-mono text-xs tracking-[0.08em] text-brand uppercase">{d.tag}</p>
              <CardTitle className="text-xl tracking-[-0.02em]">{d.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 text-[15px] leading-relaxed text-muted-foreground">
              <p className="text-foreground/85">{d.body}</p>
              <p>{d.detail}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-[220px_1fr] md:gap-10">
        <div>
          <h3 className="text-lg font-medium tracking-[-0.02em]">Open or sealed bidding</h3>
          <p className="mt-2 text-sm text-muted-foreground">The issuer chooses per auction.</p>
        </div>
        <div className="grid items-start gap-4 sm:grid-cols-2">
          {bidding.map((b) => (
            <Card key={b.tag} size="sm" className="bg-secondary ring-0">
              <CardHeader>
                <CardTitle>{b.tag}</CardTitle>
                <CardDescription className="leading-relaxed">{b.body}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
