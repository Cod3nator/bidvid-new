import React, { useEffect, useState } from "react";
import { Check } from 'lucide-react';
const WhatsInside = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateContent = (index) => {
    const points = document.querySelectorAll(".points .point");
    const cards = document.querySelectorAll(".content-context");
    const mobileBars = document.querySelectorAll(".points-mobile .point-bars");

    points.forEach((point, i) => {
      point.classList.toggle("active", i === index);
      const pb = point.querySelector(".progress-bar");
      const pr = point.querySelector(".progress-bar .progress");
      pb?.classList.toggle("active", i === index);
      pr?.classList.toggle("active", i === index);
    });

    cards.forEach((card, i) => {
      card.classList.toggle("active", i === index);
    });

    mobileBars.forEach((bar, i) => {
      bar.classList.toggle("active", i === index);
    });

    setCurrentIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (currentIndex + 1) % 3; // Cycle through 3 items
      updateContent(nextIndex);
    }, 7000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  useEffect(() => {
    const points = document.querySelectorAll(".points .point");
    const mobileBars = document.querySelectorAll(".points-mobile .point-bars");

    const handleClick = (index) => {
      updateContent(index);
    };

    points.forEach((point, index) => {
      point.addEventListener("click", () => handleClick(index));
    });

    mobileBars.forEach((bar, index) => {
      bar.addEventListener("click", () => handleClick(index));
    });

    return () => {
      points.forEach((point) => point.removeEventListener("click", handleClick));
      mobileBars.forEach((bar) =>
        bar.removeEventListener("click", handleClick)
      );
    };
  }, []);
  
  
  return (
    <div className="whats-inside container">
      <div className="time-content">
        <div className="content-area">
           
        <div className="content-context one active" data-card="one">
        <div className="image-box">
            <img src="/inside-one.png" alt="" />
          </div>
          <div className="inside-content">
            <h3>Real-Time Bid Optimization</h3>
            <div className="inside-text-wrapper">
              <p>
                Our advanced AI algorithms analyse each ad request in real time,
                dynamically adjusting key parameters such as CPM floor, auction
                timeout rate, participating bidders, and allowed ad sizes. This
                ensures the highest possible yield from every ad impression.
              </p>
              <ul>
              <li><Check size={20} color="#fcfcfc" strokeWidth={1.5} /> Dynamic adjustment of auction parameters</li>
                <li><Check size={20} color="#fcfcfc" strokeWidth={1.5} />Real-time analysis of user behavior and market conditions</li>
                <li><Check size={20} color="#fcfcfc" strokeWidth={1.5} />Seamless integration with your existing ad tech stack</li>
                <li><Check size={20} color="#fcfcfc" strokeWidth={1.5} />How to get Airtable base to JSON</li>
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
              <li><Check size={20} color="#fcfcfc" strokeWidth={1.5} /> Dynamic adjustment of auction parameters</li>
                <li><Check size={20} color="#fcfcfc" strokeWidth={1.5} />Real-time analysis of user behavior and market conditions</li>
                <li><Check size={20} color="#fcfcfc" strokeWidth={1.5} />Seamless integration with your existing ad tech stack</li>
                <li><Check size={20} color="#fcfcfc" strokeWidth={1.5} />How to get Airtable base to JSON</li>
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
              <li><Check size={20} color="#fcfcfc" strokeWidth={1.5} /> Dynamic adjustment of auction parameters</li>
                <li><Check size={20} color="#fcfcfc" strokeWidth={1.5} />Real-time analysis of user behavior and market conditions</li>
                <li><Check size={20} color="#fcfcfc" strokeWidth={1.5} />Seamless integration with your existing ad tech stack</li>
                <li><Check size={20} color="#fcfcfc" strokeWidth={1.5} />How to get Airtable base to JSON</li>
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
        <div className="points-mobile">
          <div className="point-bars active">
          <div className="progress active"></div>
          </div>
          <div className="point-bars">
          <div className="progress"></div>
            </div>
            <div className="point-bars">
            <div className="progress"></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsInside;


