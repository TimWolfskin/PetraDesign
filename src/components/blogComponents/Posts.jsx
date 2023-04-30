import React from "react";

import styles from "../../styles/blog/Posts.module.scss";
import global from "../../styles/global.module.scss";
import SinglePost from "./SinglePost";
import { postData, postItems } from "../../staticData/data";

const Posts = () => {
  return (
    <section className={styles.blog}>
      <div className={global.container}>
        <div className={styles.blog__inner}>
          <div className={styles.blog__items}>
            {postData.map((item) => (
              <SinglePost item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Posts;
