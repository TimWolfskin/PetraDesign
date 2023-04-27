import React from "react";
import styles from '../../../styles/about/About.module.scss'
import IMAGE1 from '../../../media/partner-1.svg'
import IMAGE2 from '../../../media/partner-2.svg'

const Partners = () => {
  return (
    <div className="">
      <div className={styles.containerFluid}>
        <div className={styles.partners__items}>
          <img
            className={styles.partners__item}
            src={IMAGE1}
            alt=""
          />
          <img
            className={styles.partners__item}
            src={IMAGE2}
            alt=""
          />
          <img
            className={styles.partners__item}
            src={IMAGE1}
            alt=""
          />
          <img
            className={styles.partners__item}
            src={IMAGE2}
            alt=""
          />
          <img
            className={styles.partners__item}
            src={IMAGE1}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
