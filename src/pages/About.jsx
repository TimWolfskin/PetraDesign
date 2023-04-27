import React from "react";
import global from "../styles/global.module.scss";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import BannerAbout from "../components/about/bannerAbout/BannerAbout";
import Videopopup from "../components/about/videopopup/Videopopup";
import Inspiration from "../components/about/inspiration/Inspiration";
import Partners from "../components/about/partners/Partners";
import Collection from "../components/about/collection/Collection";

const About = () => {
  return (
    <div className={global.mainWrapper}>
      <Header />
      <BannerAbout />
      <Videopopup />
      <Inspiration />
      <Partners />
      <Collection />
      <Footer />
    </div>
  );
};

export default About;
