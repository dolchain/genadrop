import algoIcon from "../assets/icon-algo.svg";
import auroraIcon from "../assets/icon-aurora.svg";
import celoIcon from "../assets/icon-celo.svg";
import polygonIcon from "../assets/icon-polygon.svg";
import nearIcon from "../assets/icon-near.svg";
// import solanaIcon from "../assets/icon-solana.svg";
import avalancheIcon from "../assets/icon-avalanche.svg";
import arbitrumIcon from "../assets/arbitrum.svg";
import optimismIcon from "../assets/optism.svg";
import { addChain, switchChain } from "./chainConnect";

// Chain Icons
import avaxChainIcon from "../assets/chainIcons/avalanche.svg";
import nearChainIcon from "../assets/chainIcons/near.svg";
import optimismChainIcon from "../assets/chainIcons/optimism.svg";
import algorandChainIcon from "../assets/chainIcons/algoIcon.svg";
import arbitrumChainIcon from "../assets/chainIcons/arbitrum.svg";
import auroraChainIcon from "../assets/chainIcons/aurora.svg";
import polygonChainIcon from "../assets/chainIcons/polygon.svg";

const supportedChains = {
  1111: {
    id: "near",
    label: "Near Testnet",
    chain: "Near",
    icon: nearIcon,
    livePrice: "",
    symbol: "",
    networkId: 1111,
    explorer: "https://explorer.testnet.near.org/?query=",
    add: null,
    isMainnet: false,
    switch: null,
    coinGeckoLabel: "",
  },
  1112: {
    id: "near",
    label: "Near",
    chain: "Near",
    icon: nearIcon,
    livePrice: "",
    symbol: "",
    networkId: 1112,
    explorer: "https://explorer.near.org/?query=",
    add: null,
    isMainnet: true,
    switch: null,
    coinGeckoLabel: "",
  },
  4160: {
    id: "algorand",
    label: "Algorand",
    chain: "Algorand",
    icon: algoIcon,
    symbol: "ALGO",
    networkId: 4160,
    add: null,
    isMainnet: process.env.REACT_APP_ENV_STAGING === "false",
    switch: null,
  },
  80001: {
    id: "matic-network",
    label: "Polygon Testnet",
    chain: "Polygon",
    icon: polygonIcon,
    symbol: "MATIC",
    explorer: "https://mumbai.polygonscan.com/address",
    networkId: 80001,
    livePrice: "https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=usd",
    add: addChain,
    isMainnet: false,
    switch: switchChain,
    coinGeckoLabel: "matic-network",
  },
  137: {
    id: "matic-network",
    label: "Polygon",
    chain: "Polygon",
    explorer: "https://polygonscan.com/address",
    icon: polygonIcon,
    symbol: "MATIC",
    networkId: 137,
    livePrice: "https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=usd",
    add: addChain,
    isMainnet: true,
    switch: switchChain,
    coinGeckoLabel: "matic-network",
  },
  43114: {
    id: "avalanche",
    label: "Avalanche",
    chain: "Avalanche",
    icon: avalancheIcon,
    livePrice: "https://api.coingecko.com/api/v3/simple/price?ids=avalanche-2&vs_currencies=usd",
    symbol: "AVAX",
    networkId: 43114,
    explorer: "https://snowtrace.io/",
    add: addChain,
    isMainnet: true,
    switch: switchChain,
    coinGeckoLabel: "avalanche-2",
  },

  43113: {
    id: "avalanche",
    label: "Avalanche Testnet",
    chain: "Avalanche",
    icon: avalancheIcon,
    livePrice: "https://api.coingecko.com/api/v3/simple/price?ids=avalanche-2&vs_currencies=usd",
    symbol: "AVAX",
    networkId: 43113,
    explorer: "https://testnet.snowtrace.io/",
    add: addChain,
    isMainnet: false,
    switch: switchChain,
    coinGeckoLabel: "avalanche-2",
  },
  1313161554: {
    id: "aurora-near",
    label: "Aurora",
    chain: "Aurora",
    icon: auroraIcon,
    symbol: "AETH",
    explorer: "https://aurorascan.dev/",
    networkId: 1313161554,
    add: addChain,
    isMainnet: true,
    switch: switchChain,
    coinGeckoLabel: "",
  },
  1313161555: {
    id: "ethereum",
    label: "Aurora Testnet",
    chain: "Aurora",
    icon: auroraIcon,
    livePrice: "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd",
    symbol: "AETH",
    networkId: 1313161555,
    explorer: "https://testnet.aurorascan.dev/address/",
    add: addChain,
    isMainnet: false,
    switch: switchChain,
    coinGeckoLabel: "ethereum",
  },
  42220: {
    id: "celo",
    label: "Celo",
    chain: "Celo",
    icon: celoIcon,
    symbol: "CGLD",
    networkId: 42220,
    explorer: "https://explorer.celo.org/address",
    add: addChain,
    isMainnet: true,
    switch: switchChain,
    coinGeckoLabel: "celo",
  },
  44787: {
    label: "Celo Testnet (Alfajores)",
    chain: "Celo",
    icon: celoIcon,
    id: "celo",
    symbol: "CGLD",
    networkId: 44787,
    add: addChain,
    explorer: "https://alfajores-blockscout.celo-testnet.org/address/",
    isMainnet: false,
    livePrice: "https://api.coingecko.com/api/v3/simple/price?ids=celo&vs_currencies=usd",
    switch: switchChain,
    coinGeckoLabel: "celo",
    comingSoon: false,
  },

  421613: {
    id: "arbitrum",
    label: "Arbitrum Testnet",
    chain: "Arbitrum",
    icon: arbitrumIcon,
    livePrice: "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd",
    symbol: "ETH",
    networkId: 421613,
    explorer: "https://goerli.arbiscan.io/",
    add: addChain,
    isMainnet: false,
    switch: switchChain,
    coinGeckoLabel: "ethereum",
  },
  42161: {
    id: "arbitrum",
    label: "Arbitrum",
    chain: "Arbitrum",
    icon: arbitrumIcon,
    livePrice: "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd",
    symbol: "ETH",
    networkId: 42161,
    explorer: "https://arbiscan.io/",
    add: addChain,
    isMainnet: true,
    switch: switchChain,
    coinGeckoLabel: "ethereum",
  },
  10: {
    id: "optimism",
    label: "Optimism",
    chain: "Optimism",
    icon: optimismIcon,
    livePrice: "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd",
    symbol: "OP",
    networkId: 10,
    explorer: "https://optimistic.etherscan.io/",
    add: addChain,
    isMainnet: true,
    switch: switchChain,
    coinGeckoLabel: "optimism",
    comingSoon: true,
  },
};

export const orderedChainsList = [
  {
    id: "near",
    label: "Near Testnet",
    chain: "Near",
    icon: nearChainIcon,
    livePrice: "",
    symbol: "",
    networkId: 1111,
    explorer: "https://explorer.testnet.near.org/?query=",
    add: null,
    isMainnet: false,
    switch: null,
    coinGeckoLabel: "",
  },
  {
    id: "near",
    label: "Near",
    chain: "Near",
    icon: nearChainIcon,
    livePrice: "",
    symbol: "",
    networkId: 1112,
    explorer: "https://explorer.near.org/?query=",
    add: null,
    isMainnet: true,
    switch: null,
    coinGeckoLabel: "",
  },
  {
    id: "algorand",
    label: "Algorand",
    chain: "Algorand",
    icon: algorandChainIcon,
    symbol: "ALGO",
    networkId: 4160,
    add: null,
    isMainnet: process.env.REACT_APP_ENV_STAGING === "false",
    switch: null,
  },
  {
    id: "matic-network",
    label: "Polygon Testnet",
    chain: "Polygon",
    icon: polygonChainIcon,
    symbol: "MATIC",
    explorer: "https://mumbai.polygonscan.com/address",
    networkId: 80001,
    livePrice: "https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=usd",
    add: addChain,
    isMainnet: false,
    switch: switchChain,
    coinGeckoLabel: "matic-network",
  },
  {
    id: "matic-network",
    label: "Polygon",
    chain: "Polygon",
    explorer: "https://polygonscan.com/address",
    icon: polygonChainIcon,
    symbol: "MATIC",
    networkId: 137,
    livePrice: "https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=usd",
    add: addChain,
    isMainnet: true,
    switch: switchChain,
    coinGeckoLabel: "matic-network",
  },
  {
    id: "avalanche",
    label: "Avalanche",
    chain: "Avalanche",
    icon: avaxChainIcon,
    livePrice: "https://api.coingecko.com/api/v3/simple/price?ids=avalanche-2&vs_currencies=usd",
    symbol: "AVAX",
    networkId: 43114,
    explorer: "https://snowtrace.io/",
    add: addChain,
    isMainnet: true,
    switch: switchChain,
    coinGeckoLabel: "avalanche-2",
  },
  {
    id: "avalanche",
    label: "Avalanche Testnet",
    chain: "Avalanche",
    icon: avaxChainIcon,
    livePrice: "https://api.coingecko.com/api/v3/simple/price?ids=avalanche-2&vs_currencies=usd",
    symbol: "AVAX",
    networkId: 43113,
    explorer: "https://testnet.snowtrace.io/",
    add: addChain,
    isMainnet: false,
    switch: switchChain,
    coinGeckoLabel: "avalanche-2",
  },
  {
    id: "aurora-near",
    label: "Aurora",
    chain: "Aurora",
    icon: auroraChainIcon,
    symbol: "AETH",
    explorer: "https://aurorascan.dev/",
    networkId: 1313161554,
    add: addChain,
    isMainnet: true,
    switch: switchChain,
    coinGeckoLabel: "",
  },
  {
    id: "ethereum",
    label: "Aurora Testnet",
    chain: "Aurora",
    icon: auroraChainIcon,
    livePrice: "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd",
    symbol: "AETH",
    networkId: 1313161555,
    explorer: "https://testnet.aurorascan.dev/address/",
    add: addChain,
    isMainnet: false,
    switch: switchChain,
    coinGeckoLabel: "ethereum",
  },
  {
    id: "celo",
    label: "Celo",
    chain: "Celo",
    icon: celoIcon,
    symbol: "CGLD",
    networkId: 42220,
    explorer: "https://explorer.celo.org/address",
    add: addChain,
    isMainnet: true,
    switch: switchChain,
    coinGeckoLabel: "celo",
  },
  {
    label: "Celo Testnet (Alfajores)",
    chain: "Celo",
    icon: celoIcon,
    id: "celo",
    symbol: "CGLD",
    networkId: 44787,
    add: addChain,
    explorer: "https://alfajores-blockscout.celo-testnet.org/address/",
    isMainnet: false,
    livePrice: "https://api.coingecko.com/api/v3/simple/price?ids=celo&vs_currencies=usd",
    switch: switchChain,
    coinGeckoLabel: "celo",
    comingSoon: false,
  },
  {
    id: "arbitrum",
    label: "Arbitrum Testnet",
    chain: "Arbitrum",
    icon: arbitrumIcon,
    livePrice: "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd",
    symbol: "ETH",
    networkId: 421613,
    explorer: "https://goerli.arbiscan.io/",
    add: addChain,
    isMainnet: false,
    switch: switchChain,
    coinGeckoLabel: "ethereum",
  },
  {
    id: "arbitrum",
    label: "Arbitrum",
    chain: "Arbitrum",
    icon: arbitrumChainIcon,
    livePrice: "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd",
    symbol: "ETH",
    networkId: 42161,
    explorer: "https://arbiscan.io/",
    add: addChain,
    isMainnet: true,
    switch: switchChain,
    coinGeckoLabel: "ethereum",
  },
  {
    id: "optimism",
    label: "Optimism",
    chain: "Optimism",
    icon: optimismChainIcon,
    livePrice: "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd",
    symbol: "OP",
    networkId: 10,
    explorer: "https://optimistic.etherscan.io/",
    add: addChain,
    isMainnet: true,
    switch: switchChain,
    coinGeckoLabel: "optimism",
    comingSoon: true,
  },
];

export default supportedChains;
