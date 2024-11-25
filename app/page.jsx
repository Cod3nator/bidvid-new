"use client";

import React, { useEffect, useState } from "react";

import Banner from "../component/Banner";
import WhatsInside from "../component/WhatsInside";
import Features from "../component/Features";
import Stats from "../component/Stats";
import Faq from "../component/Faq";
import Contact_us from "../component/Contact_us";
import Navbar from "../component/navbar";
import Footer from "../component/Footer";

const ScrollPage = () => {


  return (
    <>
    <Navbar/>
      <section className="scroll_page">
        <Banner />
        <WhatsInside />
        <Features />
        <Stats />
        <Faq />
        <Contact_us />
      </section>
      <Footer/>
   
    </>
  );
};

export default ScrollPage;
