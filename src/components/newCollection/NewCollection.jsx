import React from "react";
import styles from "../../styles/NewCollection.module.scss";
import { newCollection } from "../../staticData/data";

const NewCollection = () => {
  return (
    <section className={styles.newCollection}>
      <div className={styles.containerFluid}>
        <h3 className={styles.newCollection__title}>
          Furniture new collection
        </h3>
        <p className={styles.newCollection__text}>
          Deep v you probably haven't heard of them banh mi synth actually
          affogato. Aesthetic lyft ethical drinking vinegar austint
        </p>
        <div className={styles.collection}>
          {newCollection.map((item) => (
            <a className={styles.collection__item} key={item.id} href="#">
              <img
                className={styles.collection__images}
                src={item.image}
                alt=""
              />
              <div className={styles.collection__info}>
                <h6 className={styles.collection__infoTitle}>{item.title}</h6>
                <p className={styles.collection__infoText}>{item.text}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewCollection;
