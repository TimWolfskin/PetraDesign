import React from "react";
import global from "../styles/global.module.scss";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Posts from "../components/blogComponents/Posts";
import Sidebar from "../components/blogComponents/Sidebar";

const Blog = () => {
  return (
    <div className={global.mainWrapper}>
      <Header />
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Posts />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
