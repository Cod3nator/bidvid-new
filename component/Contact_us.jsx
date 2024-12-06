"use client";
import React, { useState } from "react";
import { validateName, validateNumber } from "../utils/validationFunction";
import { CircleX } from 'lucide-react';
const backend_api = "https://devapi.bidvid.in";
const Contact_us = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [modalType, setModalType] = useState(null); // To track which modal to show
  const [formError, setFormError] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Check if all required fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      setModalType("missingFields");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${backend_api}/contact-us`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send the message");
      }

      const result = await response.json();
      console.log("Message sent successfully:", result);
      
      setModalType("success");
      
      setFormData({
        name: "",
        email: "",
        mobile: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      setModalType("error"); 
    } finally {
      setLoading(false);
    }
  };

  // Close modal function
  const closeModal = () => {
    setModalType(null);
  };

  return (
    <section className="contact-container">
      <div className="container">
        <div className="contact-text">
          <span>Get Started</span>
          <h2>Get in touch</h2>
          {/*  with us. We're here to assist you */}
        </div>
        <div className="contact-form">
          <form className="contact" id="contact-form" onSubmit={handleFormSubmit}>
            <div className="form-inputs">
              <div className="user-details">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onInput={validateName}
                    required
                  />
                  <label htmlFor="name">Your Name</label>
                </div>
                <div className="form-group">
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="email">Email Address</label>
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number (optional)"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    onInput={validateNumber}
                  />
                  <label htmlFor="Mobile">Mobile Number</label>
                </div>
              </div>
              <div className="message">
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                  <label htmlFor="message">Message</label>
                </div>
              </div>
            </div>
            <button type="submit" className="inter-button" disabled={loading}>
              {loading ? "Sending..." : "Leave us a Message"}
              <img src="arrow-right.svg" alt="" />
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <div className="contact-info-text">
            <p>Contact Info</p>
            <h2>We are always happy to assist you</h2>
          </div>

          <div className="contact-add">
            <h5>Email Address</h5>
            <div className="line"></div>
            <a href="mailto:support@bidvid.in	">support@bidvid.in	</a>
            <div className="details">
              {/* <span>Assistance hours:</span>
              <p>Monday - Friday 6 am to 8 pm EST</p> */}
            </div>
          </div>
          <div className="contact-add">
            <h5>Number</h5>
            <div className="line"></div>
            <a href="tel:+91 9930451078">(9930) 451-078</a>
            <div className="details">
              {/* <span>Assistance hours:</span>
              <p>Monday - Friday 6 am to 8 pm EST</p> */}
            </div>
          </div>
        </div>
      </div>

      {modalType && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
            <CircleX />
            </button>

            {modalType === "success" && (
              <div className="modal-body">
                <h3>Thank you for your message!</h3>
                <p>We'll get back to you as soon as possible.</p>
              </div>
            )}

            {modalType === "error" && (
              <div className="modal-body">
                <h3>Oops! Something went wrong.</h3>
                <p>Please try again later.</p>
              </div>
            )}

            {modalType === "missingFields" && (
              <div className="modal-body">
                <h3>Please fill in all required fields.</h3>
                <p>All fields marked with * are required.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact_us;
