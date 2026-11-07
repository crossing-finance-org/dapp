// SPDX-License-Identifier: Apache-2.0
import { Section } from "./section";

const checks = [
  {
    when: "At bidding",
    body: "Participants must be authorized on both the RWA token and the settlement asset.",
  },
  {
    when: "At finalization",
    body: "Every price-contributing bid is checked atomically before the price is fixed. Revoked contributors are excluded and clearing restarts without them.",
  },
  {
    when: "At each claim",
    body: "Delivery checks authorization again before assets move.",
  },
];

export function Issuers() {
  return (
    <Section
      id="issuers"
      eyebrow="For issuers"
      title="Compliance through the asset itself."
      lead="Crossing uses the authorization rules of the underlying Stellar Asset Contracts, so auction participation and delivery stay aligned with token-level permissions."
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col">
          <ul className="flex flex-col">
            {checks.map((c) => (
              <li
                key={c.when}
                className="grid gap-1 border-b border-rule py-5 first:pt-0 sm:grid-cols-[150px_1fr] sm:gap-6"
              >
                <span className="font-mono text-xs leading-6 tracking-[0.04em] text-brand uppercase">
                  {c.when}
                </span>
                <p className="text-[15px] leading-relaxed text-foreground/85">{c.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            The asset administrator keeps its existing freeze and clawback powers. A freeze can
            delay a withdrawal and a clawback can leave escrow short; the contracts track
            liabilities and block outflows while a deficit exists.
          </p>
        </div>

        <div className="flex flex-col gap-6 rounded-2xl bg-secondary p-6 sm:p-8">
          <h3 className="text-xl font-medium tracking-[-0.02em]">
            Public prices with execution context
          </h3>
          <p className="text-[15px] leading-relaxed text-muted-foreground">
            The <span className="font-mono text-[13px] text-foreground">PriceRegistry</span> records
            two separate observations: the auction&apos;s clearing result and its actual execution
            summary. An allocation can remain undelivered, for example when authorization changes
            before a claim.
          </p>
          <p className="text-[15px] leading-relaxed text-muted-foreground">
            The <span className="font-mono text-[13px] text-foreground">OracleAdapter</span> exposes
            the latest clearing observation for a fixed settlement asset through a read-only, partial
            SEP-40 interface.
          </p>
          <p className="border-t border-input pt-5 text-sm leading-relaxed text-muted-foreground">
            Applications using these records weigh execution volume, freshness, market participation
            and manipulation risk in their own pricing policies.
          </p>
        </div>
      </div>
    </Section>
  );
}
