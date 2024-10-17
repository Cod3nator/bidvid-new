import React from "react";
import Star_row from "./star_row";
import Arrow_right from "./Arrow_right";

const Banner = () => {
  
  return (
    <div className="banner ">
      <div className="banner-wrapper">
        <div className="banner-content">
          <div className="banner-text-btn">
            <div className="banner-text">
              <div className="banner-heading">
                <h1 className="grey-text">Revolutionising Bidding with</h1>
                <h1 >AI-Powered Optimisation</h1>
              </div>
              <p>
                BidVids is a cutting-edge ad technology platform that uses
                advanced AI algorithms to optimise advertising yield for digital
                media buyers.  Boost revenue and enhance user experience
                seamlessly.
              </p>
            </div>
            <button className="inter-button">
              <span>Contact Us</span>
              <Arrow_right />
            </button>
          </div>

          <div className="ratings">
            <div className="rating">
              <Star_row></Star_row>
              <p>Lorem ipsum dolor sit.</p>
            </div>
            <div className="rating">
              <Star_row></Star_row>
              <p>Lorem ipsum dolor sit. Lorem ipsum dolor </p>
            </div>
            <div className="rating">
              <Star_row></Star_row>
              <p>Lorem ipsum dolor sit.</p>
            </div>
          </div>
        </div>
        <div className="banner-img">
          <img src="banner1.png" alt="Banner Image"  />
        </div>
      </div>
    </div>
  );
};

export default Banner;
