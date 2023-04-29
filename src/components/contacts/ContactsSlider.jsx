import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import { contactsSliderData } from "../../staticData/data";
import "swiper/css";
import "swiper/swiper-bundle.min.css";
import styles from "../../styles/contacts/ContactsSlider.module.scss";

const ContactsSlider = ({ contactsSliderData }) => {
  return (
    <div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={10}
        navigation={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        effect={"cube"}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
      >
        {contactsSliderData.map((item) => (
          <SwiperSlide key={item.id}>
            <a className={styles.contactSlider__link} href="#">
              <img
                className={styles.contactSlider__img}
                src={item.image}
                alt=""
              />
              <p className={styles.contactSlider__title}>{item.title}</p>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ContactsSlider;
