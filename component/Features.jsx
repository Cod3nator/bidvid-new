import React from 'react'
import Arrow_right from './Arrow_right'

const Features = () => {
  return (
    <div className="bento">
    <div className="container">
      <div className="bento-grid">
        <div className="boxer boxer1">
        <img src="/curvebox.png" alt="" className="background-box" />
          <img src="/assets/box1.png" className='feature1' alt="" />
          {/* <Image src="/assets/box1.png"  width={100} height={250}/> */}
          <div className="boxer-text-btn">
           <div className="boxer-text">
           <h2>Increased Ad Revenue</h2>
            <p>
            Enhance your campaign's return on ad spend (ROAS) by targeting impressions that yield the best results for your online business. This service is available across major DSPs and inventory channels.
            </p>
           
           </div>
           <button className='inter-button'><span>Get Started</span><Arrow_right/></button>
          </div>
        </div>

        <div className="boxer boxer2 row-box">
       <div className="rowbox-text">
       <h2>Simplified Operations</h2>
          <p>
          BidVids' automated, self-optimising platform eliminates manual bid BidVids' automated, self-optimising platform eliminates manual bid 
          </p>
       </div>
          <img src="/assets/box2.png" alt="" />
        </div>
        <div className="boxer boxer3 row-box">
          <img src="/assets/box3.png" alt="" />
          <div className="rowbox-text">
          <h2>Improved User Experience</h2>
          <p>
          By dynamically adjusting key auction parameters, BidVids ensures that ads are correctly sized, timed, and targeted, creating a seamless and non-intrusive experience for the publisher's audience.
          </p>
          </div>
        </div>
        <div className="boxer boxer4 row-box">
          <div className="content">
           <div className="rowbox-text">
           <h2>Actionable Insights</h2>
            <p>
            Detailed reporting and analytics empower publishers to make informed decisions about inventory, pricing, and monetisation strategies.
            </p>
           </div>
          </div>
          <img src="/assets/box4.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  )
}
 
export default Features