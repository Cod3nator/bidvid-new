import React from "react";

const Contact_us = () => {
  return (
    <section className="contact-container">
      <div className="container">
        <div className="contact-text">
          <span>Get Started</span>
          <h2>Get in touch with us. We're here to assist you.</h2>
        </div>
        <div className="contact-form">
          <form className="contact">
            <div className="form-inputs">
              <div className="user-details">
                <div className="form-group">
                  <input type="text" name="name" placeholder="Your Name" />
                  <label htmlFor="name">Your Name</label>
                </div>
                <div className="form-group">
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                  />

                  <label htmlFor="email">Email Address</label>
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number (optional)"
                  />
                  <label htmlFor="phone">Phone Number</label>
                </div>
              </div>
              <div className="message">
                <div className="form-group">
                  <textarea name="message" placeholder="Message" 
                  ></textarea>
                  <label htmlFor="message">Message</label>
                </div>
              </div>
            </div>
            <button type="submit" className="inter-button">
              <span>Leave us a Message</span>{" "}
              <img src="arrow-right.svg" alt="" />
            </button>
          </form>
        </div>
        <div className="contact-info">
          <div className="contact-info-text">
            <p>Contact Info</p>
            <h2>We are always happy to assist you</h2>
          </div>
       
        <div className="contact-add">
          <h5>Email Address</h5>
          <div className="line"></div>
          <a href="mailto:help@info.com">help@info.com</a>
         <div className="details">
         <span>Assistance hours:</span>
         <p>Monday - Friday 6 am to 8 pm EST</p>
         </div>
        </div>
        <div className="contact-add">
          <h5>Number</h5>
          <div className="line"></div>
          <a href="tel:+91 7447835979"> (7447) 999-9983</a>
          <div className="details">
          <span>Assistance hours:</span>
          <p>Monday - Friday 6 am to 8 pm EST</p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Contact_us;
