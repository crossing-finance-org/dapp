// SPDX-License-Identifier: Apache-2.0
import { AuctionModes } from "@/components/landing/auction-modes";
import { Evidence } from "@/components/landing/evidence";
import { Hero } from "@/components/landing/hero";
import { Issuers } from "@/components/landing/issuers";
import { Lifecycle } from "@/components/landing/lifecycle";
import { OnePrice } from "@/components/landing/one-price";
import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <Hero />
        <OnePrice />
        <AuctionModes />
        <Lifecycle />
        <Issuers />
        <Evidence />
      </main>
      <SiteFooter />
    </>
  );
}
