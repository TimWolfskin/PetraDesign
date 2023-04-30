import React from "react";

import { postData } from "../../staticData/data";
import styles from "../../styles/blog/SinglePost.module.scss";
import global from "../../styles/global.module.scss";
import { Link } from "react-router-dom";

const SinglePost = () => {
  return (
    <section className={styles.blog}>
      <div className={global.container}>
        <div className={styles.blog__inner}>
          <div className={styles.blog__items}>
            {postData.map((item) => (
              <div className={styles.blog__item} key={item.id}>
                <img className={styles.blog__itemImg} src={item.image} alt="" />
                <div className={styles.blog__itemInfo}>
                  <span className={styles.blog__itemDate}>{item.date}</span> |
                  <a className={styles.blog__itemAuthor} href="#">
                    by {item.author}
                  </a>{" "}
                  |
                  <a className={styles.blog__itemTheme} href="#">
                    {item.theme}
                  </a>
                </div>

                <a className={styles.blog__itemLink} href="#">
                  <Link className="link" to={`/post/${item.id}`}>
                    <h3 className={styles.blog__itemTitle}>{item.title}</h3>
                  </Link>
                </a>
                <div className={styles.blog__oneText}>
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
                </div>
                <div className={styles.blogOne__tags}>
                  <h4 className={styles.blogOne__tagsTitle}>Tags</h4>
                  <a className={styles.blogOne__tagsLink} href="#">
                    {item.tags1}
                  </a>
                  <a className={styles.blogOne__tagsLink} href="#">
                    {item.tags2}
                  </a>
                  <a className={styles.blogOne__tagsLink} href="#">
                    {item.tags3}
                  </a>
                  <a className={styles.blogOne__tagsLink} href="#">
                    {item.tags4}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinglePost;
