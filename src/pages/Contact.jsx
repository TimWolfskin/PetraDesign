import React from "react";
import global from "../styles/global.module.scss";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Contacts from "../components/contacts/Contacts";

const Contact = () => {
  return (
    <div className={global.mainWrapper}>
      <Header />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Contact;
