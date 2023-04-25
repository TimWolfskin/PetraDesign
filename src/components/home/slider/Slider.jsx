import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import styles from "../../../styles/Slider.module.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://c4.wallpaperflare.com/wallpaper/610/276/929/house-room-interior-interior-design-wooden-surface-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/27/59/628/man-made-room-cottage-country-house-wallpaper-preview.jpg",
    "https://cdn.home-designing.com/wp-content/uploads/2016/12/quilted-leather-reading-chairs-for-sale.jpg",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className={styles.slider}>
      <div
        className={styles.container}
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <div className="">
          <img className={styles.sliderImage} src={data[0]} alt="" />
          <div className={styles.content}>
            <h3 className={styles.content__title}>Furniture <br /> collection</h3>
            <p className={styles.content__text}>
              Deep v you probably haven't heard of them banh mi synth actually
              affogato. Aesthetic lyft ethical drinking vinegar austint
            </p>
          </div>
        </div>
        <div className="">
          <img className={styles.sliderImage} src={data[1]} alt="" />
          <div className={styles.content}>
            <h3 className={styles.content__title}>Furniture <br /> collection</h3>
            <p className={styles.content__text}>
              Deep v you probably haven't heard of them banh mi synth actually
              affogato. Aesthetic lyft ethical drinking vinegar austint
            </p>
          </div>
        </div>
        <div className="">
          <img className={styles.sliderImage} src={data[2]} alt="" />
          <div className={styles.content}>
            <h3 className={styles.content__title}>Furniture <br /> collection</h3>
            <p className={styles.content__text}>
              Deep v you probably haven't heard of them banh mi synth actually
              affogato. Aesthetic lyft ethical drinking vinegar austint
            </p>
          </div>
        </div>
      </div>
      <div className={styles.icons}>
        <div className={styles.icon} onClick={prevSlide}>
          <BsChevronCompactLeft style={{ color: "#fff", fontSize: "28px" }} />
        </div>
        <div className={styles.icon} onClick={nextSlide}>
          <BsChevronCompactRight style={{ color: "#fff", fontSize: "28px" }} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
