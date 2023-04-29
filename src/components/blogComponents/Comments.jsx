import React from "react";
import styles from "../../styles/blog/Comments.module.scss"

const Comments = () => {
  return (
    <div className={styles.blogOne__comments}>
      <h4 className={styles.blogOne__commentsTitle}>Comments:</h4>
      <div className={styles.blogOne__commentsItem}>
        <img
          className={styles.blogOne__commentsAvatar}
          src="images/content/avatar.jpg"
          alt=""
        />
        <div className={styles.blogOne__commentsInfo}>
          <p className={styles.blogOne__commentsName}>Lea Brown</p>
          <p className={styles.blogOne__commentsDate}>August 12, 2020</p>
          <p className={styles.blogOne__commentsText}>
            Tumeric tousled austin, kinfolk scenester authentic craft beer
            truffaut irony intelligentsia YOLO lomo bushwick coloring book.
            Semiotics man bun venmo viral cliche
          </p>
        </div>
        <button className={styles.blogOne__reply}>Reply</button>
      </div>
    </div>
  );
};

export default Comments;
