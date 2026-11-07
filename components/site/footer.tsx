// SPDX-License-Identifier: Apache-2.0
import { Wordmark } from "@/components/brand/logo";
import { site } from "@/lib/site";

const links = [
  { label: "GitHub", href: site.links.repo },
  { label: "Docs", href: site.links.docs },
  { label: "Architecture", href: site.links.architecture },
  { label: "Contract API", href: site.links.contractApi },
  { label: "Security", href: site.links.security },
];

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-[1280px] px-4 sm:px-10 lg:px-20">
      <div className="flex flex-col gap-8 border-t border-rule py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <Wordmark />
          <p className="text-sm text-muted-foreground">{site.tagline}</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="text-ink-soft transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
      <p className="pb-10 text-xs text-muted-foreground">
        Apache-2.0 · Stellar Testnet proof of concept · No external audit or Mainnet deployment yet.
      </p>
    </footer>
  );
}
