'use client'
import React, { useEffect, useRef, useState } from 'react';

const faqData = [
  {
    question: "What services do you offer?",
    answer: "We provide [list of services]."
  },
  {
    question: "How can I contact customer support?",
    answer: "You can reach us via email at [email address], or call us at [phone number]."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a [time period] return policy. Products must be in original condition and packaging."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to many countries. Shipping costs will be calculated at checkout."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order is shipped, you will receive a tracking number via email."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept credit cards, PayPal, and other secure payment options."
  }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null); // to track which FAQ is open

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // close if open, open if closed
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
