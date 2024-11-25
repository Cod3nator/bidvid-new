import { useState, useEffect } from "react";

const TextSwap = () => {

  const swapText = ["Views", "Efficiency", "Savings"];
  const [currentText, setCurrentText] = useState(swapText[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => {
        const currentIndex = swapText.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % swapText.length;
        return swapText[nextIndex];
      });
      const swappedTxt = document.querySelector(".swapped-text");
      if (swappedTxt) {
        swappedTxt.classList.add("animate-up");
  
        swappedTxt.addEventListener("animationend", () => {
          swappedTxt.classList.remove("animate-up");
        }, { once: true }); 
      }
    }, 2000);
  
    return () => clearInterval(interval);
  }, []);
  

  return (
    <div className="text-swap">
      <div className="text-content">
        Get More <span className="swapped-text">{currentText}</span>
      </div>
      <img src="/assets/strip.png" alt="Background" />
    </div>
  );
};

export default TextSwap;
