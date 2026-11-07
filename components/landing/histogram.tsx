// SPDX-License-Identifier: Apache-2.0
import { cn } from "@/lib/utils";

// Bids ranked by price, highest first (sale book). Geometry from the
// "Accueil B — Histogramme" board, in a 500 × 400 viewBox.
const bids = [
  { x: 22.75, y: 70.75, h: 309.25 },
  { x: 72.75, y: 100.75, h: 279.25 },
  { x: 122.75, y: 128.75, h: 251.25 },
  { x: 172.75, y: 155.75, h: 224.25 },
  { x: 222.75, y: 180.75, h: 199.25 }, // marginal bid: sets the clearing price
  { x: 272.75, y: 210.75, h: 169.25 },
  { x: 322.75, y: 240.75, h: 139.25 },
  { x: 372.75, y: 275.75, h: 104.25 },
  { x: 422.75, y: 310.75, h: 69.25 },
];

const MARGINAL = 4;

export function ClearingHistogram({ className }: { className?: string }) {
  return (
    <svg
      width={560}
      height={400}
      viewBox="0 0 500 400"
      role="img"
      aria-label="Bids appear one by one from left to right as bars ranked by price; the accepted bids fill from left to right"
      className={cn("sb h-auto w-full max-w-[560px]", className)}
    >
      <defs>
        <clipPath id="sbClip">
          <rect className="sweep" x="20" y="68" width="252" height="314" />
        </clipPath>
      </defs>
      <path d="M20 20 V380 H480" fill="none" stroke="var(--input)" strokeWidth={1.5} />
      <g className="fill" clipPath="url(#sbClip)" fill="var(--brand)" fillOpacity={0.12}>
        {bids.slice(0, MARGINAL + 1).map((b) => (
          <rect key={b.x} x={b.x + 0.25} y={b.y + 0.25} width={44} height={b.h - 0.25} />
        ))}
      </g>
      {bids.map((b, i) => (
        <rect
          key={b.x}
          className={`bar k${i}`}
          x={b.x}
          y={b.y}
          width={44.5}
          height={b.h}
          fill="none"
          stroke={i === MARGINAL ? "var(--brand)" : "var(--chart-stroke)"}
          strokeWidth={i === MARGINAL ? 2 : 1.5}
        />
      ))}
    </svg>
  );
}
