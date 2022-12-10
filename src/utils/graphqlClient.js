import { createClient } from "urql";

export const polygonClient = createClient({
  url:
    process.env.REACT_APP_ENV_STAGING === "true"
      ? "https://api.thegraph.com/subgraphs/name/prometheo/playdrop"
      : "https://api.thegraph.com/subgraphs/name/prometheo/polygon-mainnet",
});

export const celoClient = createClient({
  url:
    process.env.REACT_APP_ENV_STAGING === "true"
      ? "https://api.thegraph.com/subgraphs/name/prometheo/celo-dev-subgraph"
      : "https://api.thegraph.com/subgraphs/name/prometheo/celo-mainnet",
});

export const auroraClient = createClient({
  url:
    process.env.REACT_APP_ENV_STAGING === "true"
      ? "https://api.thegraph.com/subgraphs/name/prometheo/aurora-genadrop-dev?"
      : "https://api.thegraph.com/subgraphs/name/prometheo/aurora-mainnet",
});

export const nearClient = createClient({
  url:
    process.env.REACT_APP_ENV_STAGING === "true"
      ? "https://api.thegraph.com/subgraphs/name/prometheo/near_testnet"
      : "https://api.thegraph.com/subgraphs/name/prometheo/near-mainnet",
});

export const avalancheClient = createClient({
  url:
    process.env.REACT_APP_ENV_STAGING === "true"
      ? "https://api.thegraph.com/subgraphs/name/prometheo/genadrop-avatestnet"
      : "https://api.thegraph.com/subgraphs/name/prometheo/genadrop-avax",
});

export const arbitrumClient = createClient({
  url:
    process.env.REACT_APP_ENV_STAGING === "true"
      ? "https://api.thegraph.com/subgraphs/name/prometheo/genadrop-arbitrum-goerli"
      : "https://api.thegraph.com/subgraphs/name/prometheo/arbitrum",
});
