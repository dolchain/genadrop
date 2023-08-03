import React, { useReducer, createContext, useMemo } from "react";
import { genReducer, INITIAL_STATE } from "./gen.reducer";

export const GenContext = createContext();

const GenContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(genReducer, INITIAL_STATE);

  const {
    layers,
    preview,
    mintAmount,
    nftLayers,
    combinations,
    isLoading,
    mintInfo,
    currentDnaLayers,
    collectionName,
    outputFormat,
    connector,
    chainId,
    proposedChain,
    account,
    rule,
    isRule,
    collections,
    polygonCollections,
    singlePolygonNfts,
    allChainsNfts,
    graphCollections,
    singleNfts,
    notification,
    switchWalletNotification,
    clipboardMessage,
    loaderMessage,
    collectionDescription,
    singleAvaxNfts,
    didMount,
    mainnet,
    prompt,
    promptAsset,
    promptLayer,
    promptRules,
    toggleWalletPopup,
    activeCollection,
    imageQuality,
    zip,
    connectFromMint,
    currentUser,
    imageAction,
    layerAction,
    sessionId,
    sessions,
    toggleSessionModal,
    toggleCollectionNameModal,
    currentPlan,
    proposedPlan,
    upgradePlan,
    actionProgress,
    minter,
    toggleUpgradeModal,
    searchContainer,
    isUser,
    priceFeed,
  } = state;
  const factoredState = useMemo(
    () => ({
      ...state,
      layers,
      preview,
      mintAmount,
      nftLayers,
      combinations,
      isLoading,
      mintInfo,
      currentDnaLayers,
      collectionName,
      outputFormat,
      connector,
      chainId,
      allChainsNfts,
      proposedChain,
      account,
      graphCollections,
      rule,
      isRule,
      collections,
      notification,
      switchWalletNotification,
      clipboardMessage,
      loaderMessage,
      collectionDescription,
      singleAvaxNfts,
      didMount,
      mainnet,
      singleNfts,
      prompt,
      promptAsset,
      promptLayer,
      promptRules,
      polygonCollections,
      singlePolygonNfts,
      toggleWalletPopup,
      activeCollection,
      imageQuality,
      zip,
      connectFromMint,
      currentUser,
      imageAction,
      layerAction,
      sessionId,
      sessions,
      toggleSessionModal,
      toggleCollectionNameModal,
      currentPlan,
      proposedPlan,
      upgradePlan,
      actionProgress,
      minter,
      toggleUpgradeModal,
      searchContainer,
      isUser,
      priceFeed,
      dispatch,
    }),
    [state, dispatch]
  );
  return <GenContext.Provider value={factoredState}>{children}</GenContext.Provider>;
};

export default GenContextProvider;
