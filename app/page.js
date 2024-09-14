"use client";
import React, { useEffect, useState } from "react";
import Star_row from "../component/star_row";
// import "../scroll/scrollStyle.css";

const ScrollPage = () => {
  const [percentage, setPercentage] = useState(20);
  useEffect(() => {
    const scrollWrapper = document.getElementById("scrollWrapper");

    const calculateScrollPercentage = () => {
      const scrollTop = scrollWrapper.scrollTop;
      const scrollHeight = scrollWrapper.scrollHeight;
      const clientHeight = scrollWrapper.clientHeight;

      const scrollPercentage =
        (scrollTop / (scrollHeight - clientHeight)) * 120;
      setPercentage(scrollPercentage);
    };

    scrollWrapper.addEventListener("scroll", calculateScrollPercentage);

    return () => {
      scrollWrapper.removeEventListener("scroll", calculateScrollPercentage);
    };
  }, []);
  useEffect(() => {
    const scrollingPage = document.querySelector(".scroll_page");
    if (percentage > 5 && percentage < 100) {
      scrollingPage.style.backgroundImage = `linear-gradient(180deg, black , rgb(26, 26, 170) ${percentage}%)`;
    }
  }, [percentage]);

  useEffect(() => {
    const pointsContainer = document.querySelector(".points");
    const points = pointsContainer.querySelectorAll(".point");

    points.forEach((point) => {
      const progressbar = point.querySelector(".progress-bar");
      const progress = point.querySelector(".progress-bar .progress");

      progressbar.classList.remove("active");
        revert(progress,progressbar)
      point.addEventListener("click", () => {
        points.forEach((p) => {
          const pb = p.querySelector(".progress-bar");
          const pr = p.querySelector(".progress-bar .progress");
          pb.classList.remove("active");
          pr.classList.remove("active");
          revert(pr);
        });
        progressbar.classList.add("active");
        move(progress,progressbar);
      });
    });
  }, []);
  function revert(elem, progressbar) {
    // Reset the progress bar width and remove 'active' class
    elem.style.width = "0%";
    console.log(progressbar);
    
  }
  
  function move(elem, progressbar) {
    let width = 1;
    progressbar.classList.add("active"); // Add 'active' class to start animation
  
    const id = setInterval(() => {
      if (width >= 100) {
        clearInterval(id);
        // Optional: Remove 'active' class when animation completes if needed
        console.log(progressbar);
        revert(elem, progressbar); // Optionally revert after animation
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }, 10);
  }

  return (
    <section className="scroll_page">
      <div className="scroll_wrapper" id="scrollWrapper">
        {/* start of page */}
        <div className="banner">
          <div className="banner-wrapper">
            <div className="banner-content">
              <h1>Revolutionising Bidding with</h1>
              <h1 className="gradient-title">AI-Powered Optimisation</h1>
              <p>
                BidVids Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda sapiente id placeat nobis omnis deserunt cumque
                aliquam eum, alias error!
              </p>
              <button>Contact Us</button>

              <div className="ratings">
                <div className="rating">
                  <Star_row></Star_row>
                  <p>Lorem ipsum dolor sit.</p>
                </div>
                <div className="rating">
                  <Star_row></Star_row>
                  <p>Lorem ipsum dolor sit. Lorem ipsum dolor </p>
                </div>
                <div className="rating">
                  <Star_row></Star_row>
                  <p>Lorem ipsum dolor sit.</p>
                </div>
              </div>
            </div>
            <div className="scrolling-animation">
              <div className=" column ">
                <div className="column_1">
                  <div className="icons">
                    <img src="/youtube.png" alt="" />
                    <img src="/instagram.png" alt="" />
                    <div className="white">
                      <img src="/x.png" alt="" />
                    </div>
                    <img src="/facebook.png" alt="" />
                    <img src="/google.png" alt="" />
                  </div>
                  <div className="icons">
                    <img src="/youtube.png" alt="" />
                    <img src="/instagram.png" alt="" />
                    <div className="white">
                      <img src="/x.png" alt="" />
                    </div>
                    <img src="/facebook.png" alt="" />
                    <img src="/google.png" alt="" />
                  </div>
                  <div className="icons">
                    <img src="/youtube.png" alt="" />
                    <img src="/instagram.png" alt="" />
                    <div className="white">
                      <img src="/x.png" alt="" />
                    </div>
                    <img src="/facebook.png" alt="" />
                    <img src="/google.png" alt="" />
                  </div>
                  <div className="icons">
                    <img src="/youtube.png" alt="" />
                    <img src="/instagram.png" alt="" />
                    <div className="white">
                      <img src="/x.png" alt="" />
                    </div>
                    <img src="/facebook.png" alt="" />
                    <img src="/google.png" alt="" />
                  </div>
                  <div className="icons">
                    <img src="/youtube.png" alt="" />
                    <img src="/instagram.png" alt="" />
                    <div className="white">
                      <img src="/x.png" alt="" />
                    </div>
                    <img src="/facebook.png" alt="" />
                    <img src="/google.png" alt="" />
                  </div>
                </div>
              </div>
              <div className=" column">
                <div className="column_2">
                  <div className="icons">
                    <img src="/youtube.png" alt="" />
                    <img src="/instagram.png" alt="" />
                    <div className="white">
                      <img src="/x.png" alt="" />
                    </div>
                    <img src="/facebook.png" alt="" />
                    <img src="/google.png" alt="" />
                  </div>
                  <div className="icons">
                    <img src="/youtube.png" alt="" />
                    <img src="/instagram.png" alt="" />
                    <div className="white">
                      <img src="/x.png" alt="" />
                    </div>
                    <img src="/facebook.png" alt="" />
                    <img src="/google.png" alt="" />
                  </div>
                  <div className="icons">
                    <img src="/youtube.png" alt="" />
                    <img src="/instagram.png" alt="" />
                    <div className="white">
                      <img src="/x.png" alt="" />
                    </div>
                    <img src="/facebook.png" alt="" />
                    <img src="/google.png" alt="" />
                  </div>
                  <div className="icons">
                    <img src="/youtube.png" alt="" />
                    <img src="/instagram.png" alt="" />
                    <div className="white">
                      <img src="/x.png" alt="" />
                    </div>
                    <img src="/facebook.png" alt="" />
                    <img src="/google.png" alt="" />
                  </div>
                  <div className="icons">
                    <img src="/youtube.png" alt="" />
                    <img src="/instagram.png" alt="" />
                    <div className="white">
                      <img src="/x.png" alt="" />
                    </div>
                    <img src="/facebook.png" alt="" />
                    <img src="/google.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* banner end */}

        <div className="whats-inside">
          <div className="wrap time-content">
            <div className="content-area">
              <div className="image-box">
                <img src="/whatis.png" alt="" />
              </div>
              <h3>What's Inside:</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                suscipit tenetur quae dicta beatae natus expedita dolores quasi
                necessitatibus cumque. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Est, voluptates.
              </p>
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit.</li>
              </ul>
            </div>
            <div className="points">
              <div className="point">
                <div className="content">
                  <div className="text">
                    <h2>Real-Time Bid Optimization</h2>
                    <p>Plug and play</p>
                  </div>
                  <div className="icon">
                    <img src="/twitter.png" alt="" />
                  </div>
                </div>
                <div className="progress-bar">
                  <div className="progress"></div>
                </div>
              </div>
              <div className="point">
                <div className="content">
                  <div className="text">
                    <h2>Real-Time Bid Optimization</h2>
                    <p>Plug and play</p>
                  </div>
                  <div className="icon">
                    <img src="/youtube.png" alt="" />
                  </div>
                </div>
                <div className="progress-bar">
                  <div className="progress"></div>
                </div>
              </div>
              <div className="point">
                <div className="content">
                  <div className="text">
                    <h2>Real-Time Bid Optimization</h2>
                    <p>Plug and play</p>
                  </div>
                  <div className="icon">
                    <img src="/instagram.png" alt="" />
                  </div>
                </div>
                <div className="progress-bar">
                  <div className="progress"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end of whats inside  */}

        <div className="bento">
          <div className="wrap">
            <div className="bento-grid">
              <div className="boxer boxer1">
                <img src="/box1.png" alt="" />
                <div className="content-boxer">
                  <h2>Increased Ad Revenue</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                    Lorem ipsum dolor sit.?
                  </p>
                  <button>Get Started</button>
                </div>
              </div>

              <div className="boxer boxer2 row-box">
                <h2>Simplified Operations</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                  a fugiat ipsa voluptatibus, quidem iste id vel non impedit
                </p>
                <img src="/box2.png" alt="" />
              </div>
              <div className="boxer boxer3 row-box">
                <img src="/box3.png" alt="" />
                <h2>Improved User Experience</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                  a fugiat ipsa voluptatibus, quidem iste id vel non impedit
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                  velit.
                </p>
              </div>
              <div className="boxer boxer4 row-box">
                <div className="content">
                  <h2>Actionable Insights</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero, a fugiat ipsa voluptatibus, quidem iste id vel non
                    impedit
                  </p>
                </div>
                <img src="/box4.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* testimonial */}
        <div className="testimonial">
          <div className="wrap">
            <div className="testimonial-content">
              <div className="intro">
                <img src="/testi.png" alt="" />
                <div className="text-content">
                  <p className="tag">The Expert</p>
                  <h4>Hey, I'm Romina Kavcic</h4>
                </div>
              </div>
              <img src="/Container.png" alt="" />
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

        {/* end of page  */}
      </div>
    </section>
  );
};

export default ScrollPage;
