import React from 'react'
import styles from '../../../styles/about/Inspiration.module.scss'
import IMAGE from '../../../media/inspiration-decor.png'


const Inspiration = () => {
  return (
    <section className={styles.inspiration}>
    <div className={styles.containerFluid}>
      <div className={styles.inspiration__inner}>
        <img className={styles.inspiration__images} src={IMAGE} alt=""/>
        <div className={styles.inspiration__content}>
          <h3 className={styles.inspiration__title}>
            Our Inspiration in details
          </h3>
          <p className={styles.inspiration__text}>
            Semiotics fixie four dollar toast, next level woke scenester direct trade photo booth
            helvetica jean shorts. Fanny pack church-key cornhole, banh mi thundercats gochujang keytar.
          </p>
          <ul className={styles.inspiration__list}>
            <li className={styles.inspiration__item}>
              <div className={styles.inspiration__itemContent}>
                <p className="inspiration__itemText">Design and technical drawings</p>
                <p className={styles.inspiration__num}>80%</p>
              </div>
              <div className={styles.inspiration__line} style={{width: "80%"}}></div>
            </li>
            <li className={styles.inspiration__item}>
            <div className={styles.inspiration__itemContent}>
                <p className="inspiration__itemText">Measurments</p>
                <p className={styles.inspiration__num}>70%</p>
              </div>
              <div className={styles.inspiration__line} style={{width: "70%"}}></div>
            </li>
            <li className={styles.inspiration__item}>
            <div className={styles.inspiration__itemContent}>
                <p className="inspiration__itemText">Furniture functionality analysis</p>
                <p className={styles.inspiration__num}>75%</p>
              </div>
              <div className={styles.inspiration__line} style={{width: "75%"}}></div>
            </li>
            <li className={styles.inspiration__item}>
            <div className={styles.inspiration__itemContent}>
                <p className="inspiration__itemText">Interior visualization</p>
                <p className={styles.inspiration__num}>40%</p>
              </div>
              <div className={styles.inspiration__line} style={{width: "40%"}}></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Inspiration