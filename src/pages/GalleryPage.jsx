import React from 'react'
import global from "../styles/global.module.scss";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import MainGallery from '../components/mainGallery/MainGallery';



const GalleryPage = () => {
  return (
    <div className={global.mainWrapper}>
      <Header />
      <MainGallery />
      <Footer />
    </div>
  )
}

export default GalleryPage