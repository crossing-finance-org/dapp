// SPDX-License-Identifier: Apache-2.0
import { Section } from "./section";

// "From funding to settlement", Crossing README.
const steps = [
  {
    title: "Create the auction",
    body: "The RWA token's current Stellar Asset Contract administrator authorizes an immutable configuration through the factory.",
  },
  {
    title: "Fund the escrow",
    body: "The issuer deposits the sale inventory or buyback budget before bidding starts.",
  },
  {
    title: "Place funded bids",
    body: "Buyers deposit settlement tokens for a sale; sellers deposit RWA tokens for a buyback. Sealed participants reveal in the later reveal window.",
  },
  {
    title: "Determine one price",
    body: "Permissionless, bounded transactions rank the book, check eligible price contributors and finalize the clearing result.",
  },
  {
    title: "Claim and withdraw",
    body: "Successful claims deliver assets. Refunds and proceeds become credits owned by the original account, withdrawable in the corresponding asset.",
  },
  {
    title: "Publish the outcome",
    body: "Anyone can submit the transactions that publish verified clearing and execution observations to the registry.",
  },
];

export function Lifecycle() {
  return (
    <Section
      eyebrow="From funding to settlement"
      title="Both sides commit assets before trading."
      lead="Funding removes the need to collect a winning bidder's payment after the auction. Delivery still depends on the asset's authorization rules and successful claim transactions."
    >
      <ol className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((s, i) => (
          <li key={s.title} className="flex flex-col gap-3 border-t border-foreground pt-5">
            <span className="font-mono text-xs text-muted-foreground">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="text-lg font-medium tracking-[-0.02em]">{s.title}</h3>
            <p className="text-[15px] leading-relaxed text-muted-foreground">{s.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
