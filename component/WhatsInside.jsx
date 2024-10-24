import React, { useEffect } from "react";

const WhatsInside = () => {

  // useEffect(() => {
  //  const context= document.querySelectorAll(".content-context");
  //  console.log(context);
   
  // },[])
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
  
    points.forEach((point) => {
      point.addEventListener("click", () => handleClick(point));

    });
  
    // Cleanup event listeners on unmount
    return () => {
      points.forEach((point) => {
        point.removeEventListener("click", handleClick);
      });
    };
  }, []);
  

   function cardLoop(cards,context){
    const progressbars = point.querySelectorAll(".progress-bar");
    progressbars.forEach()
   }

  function showCurrent(point,cards){
    const data = point.dataset.card;
      cards.forEach((card) => {
        card.classList.remove("active");
        if (card.dataset.card === data) {   
          card.classList.add("active");
        }
      })    
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
                <p>Plug and play</p>
              </div>
              <div className="icon">
                <img src="/assets/twitter.png" alt="" />
              </div>
            </div>
            <div className="progress-bar">
              <div className="progress"></div>
            </div>
          </div>
          <div className="point" data-card="two">
            <div className="content">
              <div className="text">
                <h2>Real-Time Bid Optimization</h2>
                <p>Plug and play</p>
              </div>
              <div className="icon">
                <img src="/assets/youtube.png" alt="" />
              </div>
            </div>
            <div className="progress-bar">
              <div className="progress"></div>
            </div>
          </div>
          <div className="point" data-card="three">
            <div className="content">
              <div className="text">
                <h2>Real-Time Bid Optimization</h2>
                <p>Plug and play</p>
              </div>
              <div className="icon">
                <img src="/assets/instagram.png" alt="" />
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
