import React from "react";
import global from "../styles/global.module.scss";
import SinglePost from "../components/blogComponents/SinglePost";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Comments from "../components/blogComponents/Comments";
import CommentsForm from "../components/blogComponents/CommentsForm";

const Post = () => {
  return (
    <div className={global.mainWrapper}>
      <Header />
      <div
        className=""
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          marginBottom: "100px"
        }}
      >
        <SinglePost />
        <Comments />
        <CommentsForm />
      </div>
      <Footer />
    </div>
  );
};

export default Post;
