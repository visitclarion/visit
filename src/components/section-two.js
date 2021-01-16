import React from "react"

const SecondSection = () => {
  return (
    <div>
      <div className="container">
        <div className="parent">
          <div
            className="child"
            style={{
              backgroundImage: `url(${require("../images/hotel.jpg")})`,
            }}
          >
            <h2>Find the Best Places to Stay</h2>
            <button className="center main-button">Explore</button>
          </div>
          <div
            className="child"
            style={{
              backgroundImage: `url(${require("../images/restaurant.jpg")})`,
            }}
          >
            <h2>Find the Best Places to Eat</h2>
            <button className="center main-button">Explore</button>
          </div>
          <div
            className="child"
            style={{
              backgroundImage: `url(${require("../images/events.jpg")})`,
            }}
          >
            <h2 className="child-heading">
              Find Details of Events Happening Around
            </h2>
            <button className="center main-button">Explore</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondSection
