// SPDX-License-Identifier: Apache-2.0
import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoMarkProps = {
  size?: number;
  /** Colour of the gap drawn behind the curve. Match the surface behind the mark. */
  gap?: string;
  className?: string;
};

/** Crossing mark: an open ring crossed by the clearing curve. */
export function LogoMark({ size = 28, gap = "var(--background)", className }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      aria-hidden="true"
      className={cn("shrink-0", className)}
    >
      <path
        d="M91.1 28.9 A44 44 0 1 0 91.1 91.1"
        fill="none"
        stroke="var(--foreground)"
        strokeWidth={14}
      />
      <path d="M4 96 Q58 90 92 50" fill="none" stroke={gap} strokeWidth={26} />
      <path d="M4 96 Q58 90 92 50" fill="none" stroke="var(--brand)" strokeWidth={12} />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Crossing Protocol home"
      className={cn("flex items-center gap-2.5 text-foreground", className)}
    >
      <LogoMark />
      <span className="text-lg tracking-[-0.02em]">
        <span className="font-semibold">Crossing</span>{" "}
        <span className="text-muted-foreground">Protocol</span>
      </span>
    </Link>
  );
}
