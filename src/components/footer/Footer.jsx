import React from "react";
import styles from "../../styles/Footer.module.scss";
import global from "../../styles/global.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={global.container}>
          <div className={styles.footer__inner}>
            <div className={styles.footer__info}>
              <h6 className={styles.footer__infoTitle}>Contact Us</h6>
              <p className={styles.footer__infoText}>
                Keffiyeh poutine etsy, paleo cray put a bird on it microdosing
                schlitz you probably occupy
              </p>
              <a
                className={styles.infoEmail}
                href="mailto:ouremailaddress@email.com"
              >
                ouremailaddress@email.com
              </a>
              <form className={styles.footer__form}>
                <input
                  className={styles.footer__formInput}
                  type="email"
                  placeholder="Subscribe by email"
                />
                <button className={styles.footer__formButton} type="submit">
                  Send
                </button>
              </form>
            </div>
            <ul className={styles.footer__social}>
              <li className={styles.footer__socialItem}>
                <a className={styles.footer__socialLink} href="#">
                  Facebook
                </a>
              </li>
              <li className={styles.footer__socialItem}>
                <a className={styles.footer__socialLink} href="#">
                  Instagram
                </a>
              </li>
              <li className={styles.footer__socialItem}>
                <a className={styles.footer__socialLink} href="#">
                  Pinterest
                </a>
              </li>
              <li className={styles.footer__socialItem}>
                <a className={styles.footer__socialLink} href="#">
                  WhatsApp
                </a>
              </li>
              <li className={styles.footer__socialItem}>
                <a className={styles.footer__socialLink} href="#">
                  Youtube
                </a>
              </li>
            </ul>
            <nav className={styles.footer__menu}>
              <ul className={styles.footer__menuList}>
                <li className={styles.footer__menuItem}>
                  <a className={styles.footer__menuLink} href="#">
                    Delivery
                  </a>
                </li>
                <li className={styles.footer__menuItem}>
                  <a className={styles.footer__menuLink} href="#">
                    FAQ
                  </a>
                </li>
                <li className={styles.footer__menuItem}>
                  <a className={styles.footer__menuLink} href="#">
                    HELP
                  </a>
                </li>
                <li className={styles.footer__menuItem}>
                  <a className={styles.footer__menuLink} href="#">
                    More About Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className={styles.footer__copyright}>
        <div className={global.container}>
          <p>674 Gonzales Drive. Washington, PA 15301</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
