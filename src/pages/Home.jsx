import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import global from "../styles/global.module.scss";
import Slider from "../components/home/Slider";

const Home = () => {
  return (
    <div className={global.mainWrapper}>
      <Header />
      <Slider />
      <Footer />
    </div>
  );
};

export default Home;
