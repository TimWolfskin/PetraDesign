import React from "react";
import { postData } from "../../staticData/data";
import styles from "../../styles/blog/Post.module.scss";
import global from "../../styles/blog/Post.module.scss";
import Comments from "./Comments";
import CommentsForm from "./CommentsForm";

const Post = () => {
  return (
    // blog-one
    <section className={styles.blog}>
      <div className={global.container}>
        <div className={styles.blog__inner}>
          <div className={styles.blog__items}>
            //blog-one__item
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
                  <h3 className={styles.blog__itemTitle}>{item.title}</h3>
                </a>
                <div className={styles.blog__oneText}>
                  <p>{item.text1}</p>
                  <blockquote>
                    “Simplicity is not the goal. It is the by-product of a good
                    idea and modest expectations”
                    <div className={styles.blog__blockquoteAuthor}>
                      Paul Rand
                    </div>
                  </blockquote>
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
            <Comments />
            <CommentsForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Post;
