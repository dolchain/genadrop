import React, { useEffect } from "react";
import classes from "./pushNotification.module.css";
import { ReactComponent as CloseIcon } from "../../assets/icon-close.svg";
import { nearCollectionClient } from "../../utils/graphqlClient";
import { GET_NEAR_COLLECTIONS } from "../../graphql/querries/getCollections";
import { getNearCollections } from "../../utils";

const PushNotification = ({ toggleNotification }) => {
  const handleClose = () => toggleNotification({ openNotification: false });
  // useEffect(() => {
  //   (async function getData() {
  //     const { data, error } = await nearCollectionClient.query(GET_NEAR_COLLECTIONS).toPromise();
  //     console.log(error);
  //     if (error) return;
  //     if (data) getNearCollections(data?.Collection);
  //   })();
  // }, []);
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1>Notifications</h1>
        <CloseIcon onClick={handleClose} className={classes.closeIcon} />
      </div>
      <div className={classes.content}>
        <h3>No Notifications</h3>
        <span>You don't have any notifications yet</span>
      </div>
      <div className={classes.footer}>
        <button type="button" className={classes.subsButton}>
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default PushNotification;