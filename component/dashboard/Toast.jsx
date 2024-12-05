import React, { useState, useEffect } from "react";

const Toast = ({ success, message, index, handleClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(timer); 
  }, []);

  if (!visible) return null; 

  const toastColor = {
    success: {
      bg: "#4BB543",
    },
    failure: {
      bg: "#ff5d33",
    },
  };

  return (
    <div
      className={`absolute transition-transform duration-500  rounded-lg ${visible ? "translate-x-1/2" : "translate-x-full"}`}
      style={{ right: "10px", bottom: `${20 + index * 70}px` }}  
    >
      <div
        className={`max-w-xs flex border text-sm rounded-lg`}
        style={{
          backgroundColor: success ? toastColor.success.bg : toastColor.failure.bg,
          border: "none",
          color: "#fff",
        }}
        role="alert"
        tabIndex="-1"
        aria-labelledby="hs-toast-soft-color-label"
      >
        <div id="hs-toast-soft-color-label" className="flex p-4 flex justify-center items-center">
          {message}
          <div className="flex justify-center items-center" style={{ marginLeft: "5px" }}>
            <button
              type="button"
              className="inline-flex shrink-0 justify-center items-center size-5 rounded-lg text-red-800 opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100 dark:text-red-200"
              aria-label="Close"
              onClick={handleClose}
            >
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

const ToastContainer = ({ messages }) => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    // Only add new messages as toasts if the number of toasts is less than 4
    if (messages.length > 0) {
      setToasts((prevToasts) => {
        const newToasts = messages.slice(0, 4 - prevToasts.length); // Limit the total to 4
        return [...prevToasts, ...newToasts];
      });
    }
  }, [messages]);

  const handleCloseToast = (index) => {
    setToasts((prevToasts) => prevToasts.filter((_, i) => i !== index));
  };

  return (
    <div className="relative">
      {toasts.map((toast, index) => (
        <Toast
          key={index}
          success={toast.success}
          message={toast.message}
          index={index} // pass index to manage the vertical positioning
          handleClose={() => handleCloseToast(index)}
        />
      ))}
    </div>
  );
};

export default ToastContainer;
