// SPDX-License-Identifier: Apache-2.0
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, lead, children, className }: SectionProps) {
  const titleId = id ? `${id}-title` : undefined;
  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={cn("mx-auto w-full max-w-[1280px] scroll-mt-6 px-4 sm:px-10 lg:px-20", className)}
    >
      <div className="border-t border-rule py-16 lg:py-24">
        <div className="flex max-w-[720px] flex-col gap-4">
          <p className="font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase">
            {eyebrow}
          </p>
          <h2
            id={titleId}
            className="text-[28px] leading-[1.12] font-medium tracking-[-0.03em] sm:text-[36px]"
          >
            {title}
          </h2>
          {lead ? <p className="text-lg leading-relaxed text-muted-foreground">{lead}</p> : null}
        </div>
        <div className="mt-10 lg:mt-14">{children}</div>
      </div>
    </section>
  );
}

export function ExternalLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "font-medium text-foreground underline decoration-input underline-offset-4 transition-colors hover:decoration-foreground",
        className,
      )}
    >
      {children}
    </a>
  );
}
