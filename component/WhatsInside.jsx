import React, { useEffect } from 'react'


const WhatsInside = () => {
    

  useEffect(() => {
    const pointsContainer = document.querySelector(".points");
    const points = pointsContainer.querySelectorAll(".point");

    points.forEach((point) => {
      const progressbar = point.querySelector(".progress-bar");
      const progress = point.querySelector(".progress-bar .progress");

      progressbar.classList.remove("active");
      revert(progress, progressbar);
      point.addEventListener("click", () => {
        points.forEach((p) => {
          const pb = p.querySelector(".progress-bar");
          const pr = p.querySelector(".progress-bar .progress");
          pb.classList.remove("active");
          pr.classList.remove("active");
          revert(pr);
        });
        progressbar.classList.add("active");
        move(progress, progressbar);
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
    <div className="whats-inside container">
    <div className="time-content">
      <div className="content-area">
        <div className="image-box">
          <img src="/assets/whatis.png" alt="" />
        </div>
     <div className="inside-content">
     <h3>What's Inside:</h3>
      <div className="inside-text-wrapper">
      <p>
      Our advanced AI algorithms analyse each ad request in real time, dynamically adjusting key parameters such as CPM floor, auction timeout rate, participating bidders, and allowed ad sizes. This ensures the highest possible yield from every ad impression.
        </p>
        <ul>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit.</li>
        </ul>
      </div>
     </div>
      </div>
      <div className="points">
        <div className="point">
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
        <div className="point">
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
        <div className="point">
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
  )
}

export default WhatsInside