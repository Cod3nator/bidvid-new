import React, { useState, useEffect } from "react";

const Toast = ({ success, message}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      // if (onClose) onClose(); 
    }, 5000);

    return () => clearTimeout(timer); 
  }, []);

  if (!visible) return null; 

  const toastColor = success ? "#4BB543" : "#ff5d33";

  const handleClose = () => {
    setVisible(false);
    // if (onClose) onClose();
  };

  return (
    <div
      className="absolute transition-transform duration-500 rounded-lg"
      style={{
        right: "10px",
        bottom :"20px",
        // bottom: `${20 + (4 - number) * 70}px`,
        transform: visible ? "translateX(0)" : "translateX(100%)",
        backgroundColor: toastColor,
        color: "#fff",
      }}
    >
      <div
        className="max-w-xs flex items-center justify-between p-4 text-sm rounded-lg"
        style={{
          backgroundColor: toastColor,
        }}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <span>{message}</span>
        <button
          type="button"
          className="ml-2 p-1 rounded-full text-white opacity-75 hover:opacity-100 focus:outline-none"
          aria-label="Close"
          onClick={handleClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6L6 18"></path>
            <path d="M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Toast;
