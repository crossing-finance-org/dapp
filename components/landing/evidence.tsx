// SPDX-License-Identifier: Apache-2.0
import { ArrowUpRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

import { ExternalLink, Section } from "./section";

// Figures from the Crossing README, docs/TESTING.md and deployments/TESTNET_TRANSACTIONS.md.
const stats = [
  { value: "106", label: "Testnet transactions recorded", href: site.links.testnet },
  { value: "60", label: "Integration tests against compiled WASM", href: site.links.testing },
  { value: "16", label: "Bids per auction in the current release", href: site.links.architecture },
  { value: "4", label: "Soroban contracts and a shared library", href: site.links.contractApi },
];

const contracts = [
  {
    name: "Auction",
    body: "Holds escrow, accepts bids, computes clearing and handles delivery, credits, refunds and expiry.",
    href: site.links.contracts.auction,
  },
  {
    name: "AuctionFactory",
    body: "Creates issuer-authorized auction instances and records their provenance.",
    href: site.links.contracts.factory,
  },
  {
    name: "PriceRegistry",
    body: "Verifies auction provenance and publishes clearing and execution observations.",
    href: site.links.contracts.registry,
  },
  {
    name: "OracleAdapter",
    body: "Provides read access to registry prices in a fixed base asset.",
    href: site.links.contracts.oracle,
  },
];

export function Evidence() {
  return (
    <Section
      id="evidence"
      eyebrow="Open source"
      title="Inspect the contracts and their evidence."
      lead={
        <>
          The repository contains the contract code, test fixtures, demo scenarios and review records
          needed to inspect the proof of concept. Licensed under{" "}
          <ExternalLink href={site.links.license}>Apache-2.0</ExternalLink>.
        </>
      }
    >
      <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-rule ring-1 ring-rule lg:grid-cols-4">
        {stats.map((s) => (
          <li key={s.label} className="flex">
          <a
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="group flex w-full flex-col gap-2 bg-background p-5 transition-colors hover:bg-secondary sm:p-6"
          >
            <span className="font-mono text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
              {s.value}
            </span>
            <span className="flex items-start justify-between gap-2 text-sm leading-snug text-muted-foreground">
              {s.label}
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
              />
            </span>
          </a>
          </li>
        ))}
      </ul>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
        <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
          {contracts.map((c) => (
            <li key={c.name} className="flex flex-col gap-1.5">
              <a
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 self-start font-mono text-sm font-medium hover:text-brand"
              >
                {c.name}
                <ArrowUpRight aria-hidden="true" className="size-3.5" />
              </a>
              <p className="text-[15px] leading-relaxed text-muted-foreground">{c.body}</p>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-5">
          <div className="rounded-xl bg-foreground p-5 font-mono text-[13px] leading-6 text-background">
            <p className="text-chart-stroke"># Builds the contracts and runs three asserted scenarios</p>
            <p>git clone {site.links.repo}.git</p>
            <p>cd crossing</p>
            <p>rustup component add rustfmt clippy</p>
            <p>rustup target add wasm32v1-none</p>
            <p>./scripts/demo.sh</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={site.links.pocDemo}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ size: "pill" }))}
            >
              Run the PoC
            </a>
            <a
              href={site.links.repo}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "pill" }),
                "border-input hover:bg-secondary",
              )}
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      <p className="mt-12 max-w-[720px] text-sm leading-relaxed text-muted-foreground">
        Crossing is a working smart-contract proof of concept, exercised locally and on Stellar
        Testnet. Mainnet qualification and an independent external audit remain separate release
        requirements. Report vulnerabilities through{" "}
        <ExternalLink href={site.links.security}>SECURITY.md</ExternalLink>.
      </p>
    </Section>
  );
}
