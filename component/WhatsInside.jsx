import React, { useEffect, useState } from "react";

const WhatsInside = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
 

  useEffect(() => {
    const pointsContainer = document.querySelector(".points");
    if (!pointsContainer) return;
  
    const points = pointsContainer.querySelectorAll(".point");
    const context = document.querySelectorAll(".content-context");
  
    const handleClick = (point) => {
      showCurrent(point, context);
      points.forEach((p) => {
        const pb = p.querySelector(".progress-bar");
        const pr = p.querySelector(".progress-bar .progress");
        pb.classList.remove("active");
        pr.classList.remove("active");
        if (p === point) {
          pb.classList.add("active");
          pr.classList.add("active");
        }
      });
    };
  
    const intervalId = setInterval(() => {
      const nextIndex = (currentIndex + 1) % points.length; 
      setCurrentIndex(nextIndex);
      handleClick(points[nextIndex]);
    }, 7000); 
    points.forEach((point) => {
      point.addEventListener("click", () => handleClick(point));
    });
  
    return () => {
      clearInterval(intervalId);
      points.forEach((point) => {
        point.removeEventListener("click", handleClick);
      });
    };
  }, [currentIndex]);
  
  function showCurrent(point, cards) {
    const data = point.dataset.card;
    cards.forEach((card) => {
      card.classList.remove("active");
      if (card.dataset.card === data) {
        card.classList.add("active");
      }
    });
  }       
  
  return (
    <div className="whats-inside container">
      <div className="time-content">
        <div className="content-area">
           
        <div className="content-context one active" data-card="one">
        <div className="image-box">
            <img src="/inside-one.png" alt="" />
          </div>
          <div className="inside-content">
            <h3>What's Inside:</h3>
            <div className="inside-text-wrapper">
              <p>
                Our advanced AI algorithms analyse each ad request in real time,
                dynamically adjusting key parameters such as CPM floor, auction
                timeout rate, participating bidders, and allowed ad sizes. This
                ensures the highest possible yield from every ad impression.
              </p>
              <ul>
              <li>Dynamic adjustment of auction parameters</li>
                <li>Real-time analysis of user behavior and market conditions</li>
                <li>Seamless integration with your existing ad tech stack</li>
                <li>How to get Airtable base to JSON</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="content-context two" data-card="two">
        <div className="image-box">
            <img src="/inside-two.png" alt="" />
          </div>
          <div className="inside-content">
            <h3>Maximize Return on Ad Spend (ROAS)</h3>
            <div className="inside-text-wrapper">
              <p>
                Our advanced AI algorithms analyse each ad request in real time,
                dynamically adjusting key parameters such as CPM floor, auction
                timeout rate, participating bidders, and allowed ad sizes. This
                ensures the highest possible yield from every ad impression.
              </p>
              <ul>
                <li>Dynamic adjustment of auction parameters</li>
                <li>Real-time analysis of user behavior and market conditions</li>
                <li>Seamless integration with your existing ad tech stack</li>
                <li>How to get Airtable base to JSON</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="content-context three" data-card="three">
        <div className="image-box">
            <img src="/inside-three.png" alt="" />
          </div>
          <div className="inside-content">
            <h3>Customization Reporting & Analytics</h3>
            <div className="inside-text-wrapper">
              <p>
                Our advanced AI algorithms analyse each ad request in real time,
                dynamically adjusting key parameters such as CPM floor, auction
                timeout rate, participating bidders, and allowed ad sizes. This
                ensures the highest possible yield from every ad impression.
              </p>
              <ul>
                <li>Dynamic adjustment of auction parameters</li>
                <li>Real-time analysis of user behavior and market conditions</li>
                <li>Seamless integration with your existing ad tech stack</li>
                <li>How to get Airtable base to JSON</li>
              </ul>
            </div>
          </div>
        </div>
        



        </div>
        {/* <div className="content-area">
          
        </div> */}
        <div className="points">
          <div className="point" data-card="one">
            <div className="content">
              <div className="text">
                <h2>Real-Time Bid Optimization</h2>
                <p></p>
              </div>
              <div className="icon">
                {/* <img src="/assets/twitter.png" alt="" /> */}
              </div>
            </div>
            <div className="progress-bar active">
              <div className="progress active"></div>
            </div>
          </div>
          <div className="point" data-card="two">
            <div className="content">
              <div className="text">
                <h2>Maximize Return on Ad Spend (ROAS)</h2>
                <p></p>
              </div>
              <div className="icon">
                {/* <img src="/assets/youtube.png" alt="" /> */}
              </div>
            </div>
            <div className="progress-bar">
              <div className="progress"></div>
            </div>
          </div>
          <div className="point" data-card="three">
            <div className="content">
              <div className="text">
                <h2>Customization Reporting & Analytics</h2>
                <p></p>
              </div>
              <div className="icon">
                {/* <img src="/assets/instagram.png" alt="" /> */}
              </div>
            </div>
            <div className="progress-bar">
              <div className="progress"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsInside;


