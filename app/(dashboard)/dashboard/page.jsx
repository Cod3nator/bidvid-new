"use client";
import { useUser } from "@/app/lib/UserContext";
import { useEffect, useState } from "react";

const ChartPage = () => {
  const [scale, setScale] = useState(1);
   const {userDetail} = useUser();
  const adjustIframe = () => {
    const iframe = document.getElementById("scaled-frame");
    if (iframe) {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      iframe.style.width = `${screenWidth}px`;
      iframe.style.height = `${screenHeight - 100}px`;
      const scaleFactor = Math.min(screenWidth / 1200, screenHeight / 800); 
      setScale(scaleFactor);
    }
  };

  useEffect(() => {
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
          src={`${userDetail?.meta?.report_url}`}
          allowFullScreen
          // sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"         
        />
      </div>
    </>
  );
};

export default ChartPage;
