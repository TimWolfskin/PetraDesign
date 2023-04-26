import React from "react";
import styles from "../../../styles/home/WorksPath.module.scss";
import global from "../../../styles/global.module.scss";
import PATHIMAGEONE from '../../../media/works-path-img-1.svg'
import PATHIMAGETWO from '../../../media/works-path-img-2.svg'
import PATHIMAGETHREE from '../../../media/works-path-img-3.svg'

const WorksPath = () => {
  return (
    <section className={styles.worksPath}>
      <div className={global.container}>
        <h3 className={styles.worksPath__title}>How it works</h3>
        <div className={styles.worksPath__items}>
          <div className={styles.worksPath__itemsBox}>
            <div
              className={styles.worksPath__itemConsultation}
              style={{
                width: "250px",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                position: "relative",
                height: "100%",
              }}
            >
              <img
                src={PATHIMAGEONE}
                alt=""
              />
              <h6 className={styles.worksPath__itemTitle}>
                Designer Consultation
              </h6>
              <p className={styles.worksPath__itemText}>
                Kinfolk scenester authentic craft beer truffaut irony
                intelligentsia YOLO lomo bushwick coloring
              </p>
            </div>
            <div
              className={styles.worksPath__itemProduction}
              style={{
                width: "250px",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                position: "relative",
                height: "100%",
              }}
            >
              <img
                src={PATHIMAGETWO}
                alt=""
              />
              <h6 className={styles.worksPath__itemTitle}>Production</h6>
              <p className={styles.worksPath__itemText}>
                Everyday carry actually neutra authentic kogi shabby chic
              </p>
            </div>
          </div>
          <div
            className={styles.worksPath__itemMeasuring}
            style={{
              paddingTop: '10px',
              width: "250px",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              position: "relative",
              height: "100%",
            }}
          >
            <img
              src={PATHIMAGETHREE}
              alt=""
            />
            <h6 className={styles.worksPath__itemTitle}>Measurements</h6>
            <p className={styles.worksPath__itemText}>
              Intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun
              venmo viral cliche
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksPath;
