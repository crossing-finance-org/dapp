// SPDX-License-Identifier: Apache-2.0
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { site } from "@/lib/site";

import { ExternalLink, Section } from "./section";

// Worked example from the Crossing README ("One price, multiple participants").
const rows = [
  { bidder: "Alice", qty: 6, max: 9, deposit: 54, filled: 6, pays: 42, credit: 12 },
  { bidder: "Bob", qty: 8, max: 7, deposit: 56, filled: 4, pays: 28, credit: 28 },
];

export function OnePrice() {
  return (
    <Section
      id="how-it-works"
      eyebrow="One price, multiple participants"
      title="Every accepted bid pays the same clearing price."
      lead="Bids are ranked by price. The bid that crosses the offered quantity sets the price, and every allocation above it settles at that one price."
    >
      <div className="grid grid-cols-1 gap-10 *:min-w-0 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div className="flex flex-col gap-5 text-base leading-relaxed text-muted-foreground">
          <p>
            Suppose an issuer offers <span className="text-foreground">10 RWA tokens</span>.
            Alice bids for 6 at a maximum of 9 settlement tokens each. Bob bids for 8 at a maximum
            of 7. Both fund their bids up front.
          </p>
          <p>
            The auction clears at <span className="text-foreground">7</span>. Unused deposits
            become credits each bidder can withdraw. The issuer receives 70 settlement tokens after
            the corresponding deliveries.
          </p>
          <p>
            This is an executable scenario in the{" "}
            <ExternalLink href={site.links.pocDemo}>local PoC</ExternalLink>.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="rounded-xl ring-1 ring-foreground/10">
            <Table className="font-mono text-[13px]">
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="pl-4 font-sans text-muted-foreground">Bidder</TableHead>
                  <TableHead className="text-right font-sans text-muted-foreground">Bid</TableHead>
                  <TableHead className="text-right font-sans text-muted-foreground">
                    Deposit
                  </TableHead>
                  <TableHead className="text-right font-sans text-muted-foreground">
                    Allocated
                  </TableHead>
                  <TableHead className="text-right font-sans text-muted-foreground">Pays</TableHead>
                  <TableHead className="pr-4 text-right font-sans text-muted-foreground">
                    Credit
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((r) => (
                  <TableRow key={r.bidder} className="hover:bg-transparent">
                    <TableCell className="py-3 pl-4 font-sans font-medium">{r.bidder}</TableCell>
                    <TableCell className="text-right">
                      {r.qty} @ {r.max}
                    </TableCell>
                    <TableCell className="text-right">{r.deposit}</TableCell>
                    <TableCell className="text-right">{r.filled}</TableCell>
                    <TableCell className="text-right">
                      {r.pays}
                      <span className="text-muted-foreground"> ({r.filled}×7)</span>
                    </TableCell>
                    <TableCell className="pr-4 text-right">{r.credit}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <dl className="grid grid-cols-3 gap-3">
            {[
              { k: "Offered", v: "10 RWA" },
              { k: "Clearing price", v: "7", brand: true },
              { k: "Issuer receives", v: "70" },
            ].map((s) => (
              <div key={s.k} className="rounded-xl bg-secondary px-3 py-3 sm:px-4">
                <dt className="text-xs text-muted-foreground">{s.k}</dt>
                <dd
                  className={
                    s.brand
                      ? "mt-1 font-mono text-xl font-medium text-brand"
                      : "mt-1 font-mono text-xl font-medium"
                  }
                >
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
