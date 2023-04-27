import React, { useEffect, useState } from "react";
import { galleryData } from "../../staticData/data";
import styles from "../../styles/mainGallery/MainGallery.module.scss";
//import CloseIcon from "@mui/icons-material/Close";

const MainGallery = () => {
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);



  useEffect(() => {
    setData(galleryData);
    setCollection([...new Set(galleryData.map((item) => item.title))]);
  }, []);

  const gallery_filter = (itemData) => {
    const filterData = galleryData.filter((item) => item.title === itemData);
    setData(filterData);
  };


  return (
    <div className={styles.gallery}>
      <div className={styles.containerFluid}>
        <div className={styles.gallery__buttons}>
          {collection.map((item) => (
            <button
              className={styles.gallery__btn}
              onClick={() => {
                gallery_filter(item);
              }}
            >
              {item}
            </button>
          ))}
        </div>
        <div className={styles.gallery__inner}>
          <div className={styles.gallery__items}>
            {data.map((item) => (
              <div className={styles.gallery__item}>
                <img
                  src={item.image}
                  key={item.id}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainGallery;
