import React from "react";
import global from "../styles/global.module.scss";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import BannerAbout from "../components/about/bannerAbout/BannerAbout"
import Videopopup from "../components/about/videopopup/Videopopup";


const About = () => {
  return (
    <div className={global.mainWrapper}>
      <Header />
      <BannerAbout />
      <Videopopup />
      <Footer />
    </div>
  );
};

export default About;
