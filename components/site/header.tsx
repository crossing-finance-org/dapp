// SPDX-License-Identifier: Apache-2.0
import { Wordmark } from "@/components/brand/logo";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Auctions", href: "#auctions" },
  { label: "Issuers", href: "#issuers" },
  { label: "Docs", href: site.links.docs },
];

export function SiteHeader() {
  return (
    <header className="mx-auto w-full max-w-[1280px] px-4 sm:px-10 lg:px-20">
      <div className="flex h-[72px] items-center justify-between border-b border-rule lg:h-[88px]">
        <Wordmark />
        <nav aria-label="Main" className="flex items-center gap-6 text-[15px] lg:gap-9">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              {...(item.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
              className="hidden text-ink-soft transition-colors hover:text-foreground md:inline"
            >
              {item.label}
            </a>
          ))}
          <a href={site.links.app} className={cn(buttonVariants({ size: "pill" }))}>
            Launch app
          </a>
        </nav>
      </div>
    </header>
  );
}
