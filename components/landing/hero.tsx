// SPDX-License-Identifier: Apache-2.0
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

import { ClearingHistogram } from "./histogram";

/** Hero from the "Accueil B — Histogramme" Claude Design board (1280 × 720). */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-12 px-4 py-14 sm:px-10 lg:min-h-[632px] lg:flex-row lg:justify-between lg:gap-14 lg:px-20 lg:py-0"
    >
      <div className="flex w-full max-w-[540px] flex-col gap-7 self-start lg:self-center">
        <Badge
          variant="outline"
          className="h-auto self-start px-3.5 py-1.5 text-[13px] font-normal text-ink-soft"
        >
          Built on Stellar
        </Badge>
        <h1
          id="hero-title"
          className="text-[34px] leading-[1.08] font-medium tracking-[-0.035em] sm:text-[46px] lg:whitespace-nowrap"
        >
          Single-price auctions
          <br />
          for private-market RWAs.
        </h1>
        <p className="text-lg leading-normal text-muted-foreground sm:text-xl">
          {site.description}
        </p>
        <div className="mt-1 flex flex-wrap gap-3">
          <a href={site.links.launchAuction} className={cn(buttonVariants({ size: "pill-lg" }))}>
            Launch an auction
          </a>
          <a
            href={site.links.docs}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "pill-lg" }),
              "border-input hover:bg-secondary",
            )}
          >
            Read the docs
          </a>
        </div>
      </div>
      <div className="flex w-full justify-center lg:w-[560px] xl:shrink-0">
        <ClearingHistogram />
      </div>
    </section>
  );
}
