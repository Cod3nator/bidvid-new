import React from 'react'

const Stats = () => {
  return (
    <section className="stats">
        <h3>Bidvid's Efficiency</h3>
        <div className="stats-wrapper container">
        <div className="stat-point">
            <div className="stat-key">
                22% Saving
            </div>
            <h5>Beverage client</h5>
            <p>BidVid has delivered 22% CPM efficiency</p>
        </div>
        <div className="stat-point">
            <div className="stat-key">
                30% Saving
            </div>
            <h5>Entertainment client</h5>
            <p>BidVid has delivered 30% CPM efficiency</p>
        </div>
        <div className="stat-point">
            <div className="stat-key">
            20% Saving
            </div>
            <h5>Pharma client</h5>
            <p>BidVid has delivered 20% CPM efficiency</p>
        </div>
        <div className="stat-point">
            <div className="stat-key">
            25% Saving
            </div>
            <h5>FMCG client</h5>
            <p>BidVid has delivered 25% CPM efficiency</p>
        </div>

        </div>
    </section>
  )
}

export default Stats