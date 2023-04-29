import React from "react";
import styles from "../../styles/blog/Sidebar.module.scss";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Sidebar = () => {
  return (
    <aside className={styles.aside}>
      <form className={styles.aside__search}>
        <input
          className={styles.aside__searchInput}
          type="text"
          placeholder="Search"
        />
        <button className={styles.aside__searchBtn} type="submit">
          <img src="images/search-icon.svg" alt="" />
        </button>
      </form>
      <div className={styles.blog__category}>
        <h6 className={styles.blog__categoryTitle}>Categories</h6>
        <ul className={styles.blog__categoryList}>
          <li className={styles.blog__categoryItem}>
            <a className={styles.blog__categoryLink} href="#">
              Dining room (1)
            </a>
          </li>
          <li className={styles.blog__categoryItem}>
            <a className={styles.blog__categoryLink} href="#">
              Office furniture (12)
            </a>
          </li>
          <li className={styles.blog__categoryItem}>
            <a className={styles.blog__categoryLink} href="#">
              Simple interiror design (2)
            </a>
          </li>
          <li className={styles.blog__categoryItem}>
            <a className={styles.blog__categoryLink} href="#">
              Design (4)
            </a>
          </li>
          <li className={styles.blog__categoryItem}>
            <a className={styles.blog__categoryLink} href="#">
              Bedroom Furniture (1)
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.recentPosts}>
        <h6 className={styles.recentPosts__title}>Recent Posts</h6>
        <ul className={styles.recentPosts__list}>
          <li className={styles.recentPosts__item}>
            <a className={styles.recentPosts__itemTitle} href="#">
              Cred selfies edison bulb four dollar toast humblebrag
            </a>
            <span className={styles.recentPosts__date}>August 10, 2020</span>|
            <a className={styles.recentPosts__author} href="#">
              by Ann Summers
            </a>
          </li>
          <li className={styles.recentPosts__item}>
            <a className={styles.recentPosts__itemTitle} href="#">
              Semiotics fixie four dollar toast, next level woke scenester
              direct trade photo booth
            </a>
            <span className={styles.recentPosts__date}>September 30 ,2020</span>
            |
            <a className={styles.recentPosts__author} href="#">
              by Ann Summers
            </a>
          </li>
          <li className={styles.recentPosts__item}>
            <a className={styles.recentPosts__itemTitle} href="#">
              Cred selfies edison bulb four dollar toast humblebrag
            </a>
            <span className={styles.recentPosts__date}>May 2, 2020</span>|
            <a className={styles.recentPosts__author} href="#">
              by Ann Summers
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.blog__tags}>
        <h6 className={styles.blog__tagsTitle}>Tags</h6>
        <a className={styles.blog__tagsLink} href="#">
          Dining room futniture
        </a>
        <a className={styles.blog__tagsLink} href="#">
          Chair
        </a>
        <a className={styles.blog__tagsLink} href="#">
          Table
        </a>
        <a className={styles.blog__tagsLink} href="#">
          Bedroom
        </a>
        <a className={styles.blog__tagsLink} href="#">
          Office Furniture
        </a>
      </div>
      <ul className={styles.blog__social}>
        <li className={styles.blog__socialItem}>
          <a className={styles.blog__socialLink} href="#">
            <FacebookOutlinedIcon className={styles.blog__image} />
          </a>
        </li>
        <li className={styles.blog__socialItem}>
          <a className={styles.blog__socialLink} href="#">
            <InstagramIcon className={styles.blog__image} />
          </a>
        </li>
        <li className={styles.blog__socialItem}>
          <a className={styles.blog__socialLink} href="#">
            <PinterestIcon className={styles.blog__image} />
          </a>
        </li>
        <li className={styles.blog__socialItem}>
          <a className={styles.blog__socialLink} href="#">
            <WhatsAppIcon className={styles.blog__image} />
          </a>
        </li>
        <li className={styles.blog__socialItem}>
          <a className={styles.blog__socialLink} href="#">
            <YouTubeIcon className={styles.blog__image} />
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
