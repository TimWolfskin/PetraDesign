import React from "react";
import styles from "../../../styles/home/Decor.module.scss";
import global from "../../../styles/global.module.scss";

const Decor = () => {
  return (
    <section className={styles.decor}>
      <div className={global.container}>
          <h2 className={styles.decor__title}>Aesthetic ethical drinking</h2>
          <h2 className={styles.decor__text}>
            Deep v you probably haven't heard of them banh mi synth actually
            affogato. Artlyft ethical the one drinking vinegar austint
          </h2>
        </div>
    </section>
  );
};

export default Decor;
