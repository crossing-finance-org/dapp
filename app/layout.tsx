// SPDX-License-Identifier: Apache-2.0
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { site } from "@/lib/site";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} · Single-price auctions for private-market RWAs`,
    template: `%s · ${site.name}`,
  },
  description: `${site.tagline} ${site.description}`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
