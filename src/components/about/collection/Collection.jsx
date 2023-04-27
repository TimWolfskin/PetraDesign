import React from "react";
import styles from "../../../styles/about/Collection.module.scss";
import { collection } from "../../../staticData/data";

const Collection = () => {
  return (
    <div className={styles.collection}>
      {collection.map((item) => (
        <a className={styles.collection__item} key={item.id} href="#">
          <img className={styles.collection__images} src={item.image} alt="" />
          <div className={styles.collection__info}>
            <h6 className={styles.collection__infoTitle}>{item.title}</h6>
            <p className={styles.collection__infoText}>{item.text}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Collection;
