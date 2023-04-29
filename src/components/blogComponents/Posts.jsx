import React from "react";
import styles from "../../styles/blog/Posts.module.scss";
import global from "../../styles/global.module.scss";

import Post from "./Post";

const Posts = () => {
  return (
    <section className={styles.blog}>
      <div className={global.container}>
        <div className={styles.blog__inner}>
          <div className={styles.blog__items}>
            <Post />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Posts;
