import React from "react";
import global from "../styles/global.module.scss";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Slider from "../components/home/slider/Slider";
import NewCollection from "../components/home/newCollection/NewCollection";
import Decor from "../components/home/decor/Decor";
import WorksPath from "../components/home/worksPath/WorksPath";
import Gallery from "../components/home/gallery/Gallery";
import BlogBox from "../components/home/blogBox/BlogBox";

const Home = () => {
  return (
    <div className={global.mainWrapper}>
      <Header />
      <Slider />
      <NewCollection />
      <Decor />
      <WorksPath />
      <Gallery />
      <BlogBox />
      <Footer />
    </div>
  );
};

export default Home;
