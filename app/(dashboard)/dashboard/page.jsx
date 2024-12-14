"use client";
import { useEffect, useState } from "react";

const ChartPage = () => {
  const [scale, setScale] = useState(1);

  const adjustIframe = () => {
    const iframe = document.getElementById("scaled-frame");
    if (iframe) {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
// Set iframe dimensions to match the screen size
      iframe.style.width = `${screenWidth}px`;
      iframe.style.height = `${screenHeight - 100}px`;

      // Adjust scale based on a preferred zoom-out factor
      const scaleFactor = Math.min(screenWidth / 1200, screenHeight / 800); // Adjust these ratios as needed
     
      
      setScale(scaleFactor);
    }
  };

  useEffect(() => {
    // Run adjustment on component mount and on resize
    adjustIframe();
    window.addEventListener("resize", adjustIframe);

    return () => {
      window.removeEventListener("resize", adjustIframe);
    };
  }, []);

  return (
    <>
      <div className="iframe-container mt-24" style={{ overflow: "hidden" }} >
        <iframe
          id="scaled-frame"
          className="scaled-frame"
          src="https://lookerstudio.google.com/embed/reporting/89f872ca-67c6-4d12-9b61-a9e1c0ee693c/page/JkAWE"
          allowFullScreen
          // sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
         
        />
      </div>
    </>
  );
};

export default ChartPage;
