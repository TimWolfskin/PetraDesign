import React from "react";
import { blogBoxData } from "../../../staticData/data";
import styles from "../../../styles/BlogBox.module.scss";
import global from "../../../styles/global.module.scss";

const BlogBox = () => {
  return (
    <section className={styles.blogBox}>
      <div className={global.container}>
        <h3 className={styles.blogBox__title}>
          More inspiration ideas in our blog
        </h3>
        <div className={styles.blogBox__items}>
          {blogBoxData.map((item) => (
            <div key={item.id}>
              <a className={styles.blogBox__imgLink} href="#">
                <img className={styles.blogBox__img} src={item.image} style={{height: '400px'}} alt="" />
              </a>
              <div className={styles.blogBox__links}>
                <span className={styles.blogBox__date}>{item.date}</span>|
                <a className={styles.blogBox__author} href="#">
                  by {item.author}
                </a>
                |
                <a className={styles.blogBox__theme} href="#">
                  {item.author}{" "}
                </a>
              </div>
              <a href="#">
                <h4 className={styles.blogBox__itemTitle}>{item.title}</h4>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogBox;
