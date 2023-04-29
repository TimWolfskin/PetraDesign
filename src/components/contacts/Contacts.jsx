import React from "react";
import { contactsSliderData } from "../../staticData/data";
import styles from "../../styles/contacts/Contacts.module.scss";
import global from "../../styles/global.module.scss";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ContactsSlider from "./ContactsSlider";

const Contacts = () => {
  return (
    <div className="">
      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.6149257632073!2d-122.41326968434727!3d37.79906321853408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580f18d8c6ea7%3A0x5d7f53fb70a3a903!2zNzI1IEdyZWVuIFN0LCBTYW4gRnJhbmNpc2NvLCBDQSA5NDEzMywg0KHQqNCQ!5e0!3m2!1sru!2sru!4v1649311524797!5m2!1sru!2sru"
          style={{ border: 0 }}
          width="100%"
          height="578"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <section className={styles.contact}>
        <div className={global.container}>
          <h3 className={styles.contact__title}>Contact Us</h3>
          <ul className={styles.contact__social}>
            <li className={styles.contact__socialItem}>
              <a className={styles.contact__socialLink} href="#">
                <FacebookOutlinedIcon style={{color: "#6D7278"}} className={styles.contact__image} />
              </a>
            </li>
            <li className={styles.contact__socialItem}>
              <a className={styles.contact__socialLink} href="#">
                <InstagramIcon style={{color: "#6D7278"}} className={styles.contact__image} />
              </a>
            </li>
            <li className={styles.contact__socialItem}>
              <a className={styles.contact__socialLink} href="#">
                <PinterestIcon style={{color: "#6D7278"}} className={styles.contact__image} />
              </a>
            </li>
            <li className={styles.contact__socialItem}>
              <a className={styles.contact__socialLink} href="#">
                <WhatsAppIcon style={{color: "#6D7278"}} className={styles.contact__image} />
              </a>
            </li>
            <li className={styles.contact__socialItem}>
              <a className={styles.contact__socialLink} href="#">
                <YouTubeIcon style={{color: "#6D7278"}} className={styles.contact__image} />
              </a>
            </li>
          </ul>
          <div className={styles.contact__box}>
            <p className={styles.contact__text}>
              Vexillologist vape microdosing freegan pork belly deep v direct
              trade cray single-origin coffee street art. Viral shaman mustache
              master cleanse, pour-over affogato poutine copper mug marfa fanny
              pack normcore. Lo-fi pop-up banjo portland, echo park hammock
            </p>
            <a className={styles.contact__phone} href="tel:+14158297934">
              (415) 829-7934
            </a>
            <div className={styles.contact__city}>725 Green St</div>
            <div className={styles.contact__city}>
              San Francisco, California(CA), 94133
            </div>
            <a
              className={styles.infoEmail}
              href="mailto:ouremailaddress@email.com"
            >
              ouremailaddress@email.com
            </a>
          </div>
          <form className={styles.contact__form}>
            <input
              className={styles.contact__formInput}
              placeholder="Your name"
              type="text"
            />
            <input
              className={styles.contact__formInput}
              placeholder="Your email"
              type="email"
            />
            <textarea
              className={styles.contact__formArea}
              placeholder="Your message"
            ></textarea>
            <button className={styles.contact__formBtn} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className={styles.containerFluid} style={{paddingTop: '100px'}}>
          <ContactsSlider contactsSliderData={contactsSliderData} />
        </div>
      </section>
    </div>
  );
};

export default Contacts;
