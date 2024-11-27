import React from "react";
import Star_row from "./star_row";
import Arrow_right from "./Arrow_right";
import TextSwap from "./TextSwap";

const Banner = () => {
  
  return (
    <div className="banner ">
      <div className="banner-wrapper">
        <div className="banner-content">
          <div className="banner-text-btn">
            <div className="banner-text">
              <TextSwap/>
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
            <a className="inter-button" href="/contact-us">
              <span>Contact Us</span>
              <Arrow_right />
            </a>
          </div>

          <div className="ratings">
            <div className="rating">
              <Star_row></Star_row>
              <p>"Very practical"</p>
            </div>
            <div className="rating">
              <Star_row></Star_row>
              <p>"The best investment for our product team"</p>
            </div>
            <div className="rating">
              <Star_row></Star_row>
              <p>"Absolute brilliance"</p>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Banner;
