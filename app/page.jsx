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
// import "../scroll/scrollStyle.css";

const ScrollPage = () => {
  // const [percentage, setPercentage] = useState(20);
  // useEffect(() => {
  //   const scrollWrapper = document.getElementById("scrollWrapper");

  //   const calculateScrollPercentage = () => {
  //     const scrollTop = scrollWrapper.scrollTop;
  //     const scrollHeight = scrollWrapper.scrollHeight;
  //     const clientHeight = scrollWrapper.clientHeight;

  //     const scrollPercentage =
  //       ((scrollTop / (scrollHeight - clientHeight)) * 100 )- 25;
  //     setPercentage(scrollPercentage);
  //   };

  //   scrollWrapper.addEventListener("scroll", calculateScrollPercentage);

  //   return () => {
  //     scrollWrapper.removeEventListener("scroll", calculateScrollPercentage);
  //   };
  // }, []);
  // useEffect(() => {
  //   const scrollingPage = document.querySelector(".scroll_page");
  //   if (percentage > 5 && percentage < 100) {
  //     scrollingPage.style.backgroundImage = `linear-gradient(180deg,#101010 ,#10107D  ${percentage}%)`;
  //   }
  // }, [percentage]);

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
      {/* <div className="scroll-page-holder">
    <section className="scroll_page">
      <div className="scroll_wrapper" id="scrollWrapper">
   

        <div className="testimonial">
          <div className="wrap">
            <div className="testimonial-content">
              <div className="intro">
                <img src="/assets/testi.png" alt="" />
                <div className="text-content">
                  <p className="tag">The Expert</p>
                  <h4>Hey, I'm Romina Kavcic</h4>
                </div>
              </div>
              <img src="/assets/Container.png" alt="" />
              <div className="text-content_2">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Molestiae, voluptate provident autem modi reiciendis tempora.
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dicta, esse autem nesciunt accusantium dignissimos, explicabo
                  doloremque optio odio, consequuntur voluptates eius inventore
                  praesentium cum veritatis.
                </p>
                <button>
                  <span>My Linkedin </span>{" "}
                  <div className="arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-arrow-right"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    </div> */}
    </>
  );
};

export default ScrollPage;
