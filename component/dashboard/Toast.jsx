import React, { useState, useEffect } from "react";

const Toast = ({ success, message }) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setVisible(false);
  //   }, 5000);

  //   return () => clearTimeout(timer); 
  // }, []);

  if (!visible) return null; 

  return (
    <div className={`absolute transition-transform duration-500 ${visible ? 'translate-x-1/2' : 'translate-x-full'}`} style={{right:"10px",bottom:"20px"}}>
      <div
        className={`max-w-xs ${success ? 'bg-teal-100 border-teal-200  text-teal-800' : 'bg-red-100 border-red-200 text-red-800'} border text-sm rounded-lg dark:bg-red-800/10 dark:border-red-900 dark:text-red-500`}
        role="alert"
        tabIndex="-1"
        aria-labelledby="hs-toast-soft-color-label"
      >
        <div id="hs-toast-soft-color-label" className="flex p-4">
          {message}
          <div className="ms-auto">
            <button
              type="button"
              className="inline-flex shrink-0 justify-center items-center size-5 rounded-lg text-red-800 opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100 dark:text-red-200"
              aria-label="Close"
              onClick={handleClose}
            >
              <span className="sr-only">Close</span>
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18"></path>
                <path d="M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toast;
