import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useRouteMatch } from "react-router-dom";
import algoIcon from "../../../assets/icon-algo.svg";
import classes from "./NftCard.module.css";

const NftCard = ({ nft, list, extend, loadedChain }) => {
  const { Id, collection_name, name, price, image_url } = nft;
  const match = useRouteMatch();

  const [state, setState] = useState({ algoPrice: 0, chainName: "" });
  const { algoPrice, chainName } = state;

  const handleSetState = (payload) => {
    setState((states) => ({ ...states, ...payload }));
  };

  useEffect(() => {
    if (loadedChain === "1313161555") {
      axios.get("https://api.coingecko.com/api/v3/simple/price?ids=aurora-near&vs_currencies=usd").then((res) => {
        let value = Object.values(res.data)[0].usd;
        handleSetState({ algoPrice: value * price, chainName: "AOA" });
      });
    } else {
      axios.get("https://api.coinbase.com/v2/prices/ALGO-USD/spot").then((res) => {
        handleSetState({ algoPrice: res.data.data.amount * price, chainName: "Algo" });
      });
    }
  }, []);

  return (
    <Link to={nft.collection_name ? `${match.url}/${Id}` : `/marketplace/single-mint/${Id}`}>
      <div className={classes.card}>
        <div className={classes.imageContainer}>
          <img src={image_url} alt="" />
        </div>
        <div className={classes.cardBody}>
          <div className={classes.collectionName}>{collection_name}</div>
          <div className={classes.name}>{name}</div>
          <div className={classes.chainLogo} />
          <div className={classes.wrapper}>
            <div className={classes.listPrice}>
              <div className={classes.list}>LISTPRICE</div>
              <div className={classes.price}>
                <img src={algoIcon} alt="" />

                {price} <span className={classes.chain}>{chainName}</span>
                <span className={classes.usdPrice}>({algoPrice.toFixed(2)} USD)</span>
              </div>
            </div>
            {list ? (
              ""
            ) : (
              <button type="button" className={`${classes.button} ${nft.sold ? classes.buttonSold : ""}`}>
                {nft.sold ? "SOLD!" : "Buy"}
              </button>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NftCard;
