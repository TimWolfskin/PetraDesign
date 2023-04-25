import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Header.module.scss";
import global from "../../styles/global.module.scss";
import LOGO from "../../media/logo.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header}>
        <div className={global.container}>
          <div className={styles.header__inner}>
            <nav className={styles.menu}>
              <ul className={styles.menu__list}>
                <li className={styles.menu__listItem}>
                  <Link className={styles.menu__listIink} to="/about">
                    About
                  </Link>
                </li>
                <li className={styles.menu__listItem}>
                  <Link className={styles.menu__listIink} to="gallery">
                    Gallery
                  </Link>
                </li>
              </ul>
            </nav>
            <Link className={styles.logo} to="/">
              <img
                style={{ widows: "30px", height: "30px" }}
                src={LOGO}
                alt=""
              />
            </Link>
            <nav className={styles.menu}>
              <ul className={styles.menu__list}>
                <li className={styles.menu__listItem}>
                  <Link className={styles.menu__listIink} to="/blog">
                    Blog
                  </Link>
                </li>
                <li className={styles.menu__listItem}>
                  <Link className={styles.menu__listIink} to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
