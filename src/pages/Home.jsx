import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import global from "../styles/global.module.scss";
import Slider from "../components/home/slider/Slider";
import NewCollection from "../components/home/newCollection/NewCollection";
import Decor from "../components/home/decor/Decor";

const Home = () => {
  return (
    <div className={global.mainWrapper}>
      <Header />
      <Slider />
      <NewCollection />
      <Decor />
      <Footer />
    </div>
  );
};

export default Home;
