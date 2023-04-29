import React from "react";
import styles from "../../styles/blog/CommentsForm.module.scss"

const CommentsForm = () => {
  return (
    <form className={styles.blogOne__form}>
      <h4 className={styles.blogOne__formTitle}>Post a Comment</h4>
      <textarea
        className={styles.blogOne__formTextarea}
        placeholder="Your comment"
      ></textarea>
      <input
        className={styles.blogOne__formInput}
        type="text"
        placeholder="Your name"
      />
      <input
        className={styles.blogOne__formInput}
        type="email"
        placeholder="Your e-mail"
      />
      <label className={styles.blogOne__formLabelinput}>
        <input type="checkbox" />
        Remember me
      </label>
      <button className={styles.blogOne__formBtn} type="submit">
        Submit
      </button>
    </form>
  );
};

export default CommentsForm;
