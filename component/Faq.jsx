'use client'
import React, { useEffect, useRef, useState } from 'react';

const faqData = [
  {
    question: "Whether it is a self-serve solution or a managed solution?",
    answer: "BidVid offers a managed solution, where our expert team handles bid strategies, campaign management, and optimization for you using AI. Unlike self-serve solutions, which require users to manage everything independently, our managed approach ensures professional oversight, maximizing performance and saving you time."
  },
  // {
  //   question: "How can I contact customer support?",
  //   answer: "You can reach us via email at support@bidvid.in, or call us at (9930) 451-078."
  // },
  {
    question: "What access is required?",
    answer: "To optimize the campaign Standard access to DV360."
  },
  {
    question: "How will Bidvid optimize the campaign KPI?",
    answer: "BidVid is an AI solution which would adjust bids automatically or provide suggestions based on the performance of the campaign. This optimization could help maximize return on investment (ROI) by adjusting bids for high-performing placements or audiences."
  },
  {
    question: "Will it affect the reach and frequency while implementing the Bidvid solution?",
    answer: "Yes, implementing BidVid could affect the reach and frequency of your campaign, depending on how the platform optimizes for various metrics like audience targeting, budget allocation, and bidding strategy."
  },
  {
    question: "Will Bidvid make any changes to the campaign settings?",
    answer: "No, It will not tamper with your settings. It will work within the KPIs set by you."
  },
  {
    question: "How long will it take to start seeing the results after implementation?",
    answer: "Results from the implementation can typically be observed within 24 to 48 hours."
  }
];

const  Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0); 

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); 
  };

  return (
    <section className="faq">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
      <div className="faq-questions">
      {faqData.map((faq, index) => (
        <div key={index}>
          <button
            className={`question-section ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
         
              <div className="question-align">
                <h4 className="question-style">{faq.question}</h4>
              
                <div   className={activeIndex === index ? `question-icon rotate` : `question-icon`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="m9 18 6-6-6-6"/></svg>
             
                </div>
                </div>
              <div
                ref={el => {
                  if (el) {
                    el.style.maxHeight = activeIndex === index ? `${el.scrollHeight}px` : '0px';
                  }
                }}
                className={activeIndex === index ? `answer answer-divider` : `answer`}
              >
                <p>{faq.answer}</p>
              </div>
           
          </button>
        </div>
      ))}
      </div>
      </div>
    </section>
  );
};

export default Faq;
