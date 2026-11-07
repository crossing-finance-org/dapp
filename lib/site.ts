// SPDX-License-Identifier: Apache-2.0

const repo = "https://github.com/crossing-finance-org/crossing";

export const site = {
  name: "Crossing Protocol",
  tagline: "Single-price auctions for private-market RWAs on Stellar.",
  description:
    "Issuers buy back their tokenized assets and holders sell them through funded bids, cleared at one public price.",
  links: {
    // The auction app is not built yet. Point these at the app route once it exists.
    app: "#",
    launchAuction: "#",
    repo,
    docs: `${repo}/blob/main/docs/README.md`,
    architecture: `${repo}/blob/main/ARCHITECTURE.md`,
    contractApi: `${repo}/blob/main/docs/reference/CONTRACT_API.md`,
    pocDemo: `${repo}/blob/main/docs/POC_DEMO.md`,
    testnet: `${repo}/blob/main/deployments/TESTNET_TRANSACTIONS.md`,
    testing: `${repo}/blob/main/docs/TESTING.md`,
    security: `${repo}/blob/main/SECURITY.md`,
    license: `${repo}/blob/main/LICENSE`,
    contracts: {
      auction: `${repo}/blob/main/contracts/auction/src/lib.rs`,
      factory: `${repo}/blob/main/contracts/auction-factory/src/lib.rs`,
      registry: `${repo}/blob/main/contracts/price-registry/src/lib.rs`,
      oracle: `${repo}/blob/main/contracts/oracle-adapter/src/lib.rs`,
    },
  },
} as const;
