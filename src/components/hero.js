import React from "react"
import "../style/style.css"
import Image from "../components/image"
import BackgroundImages from "../components/backgroundimage"

const Hero = props => {
  return (
    <div>
      <BackgroundImages name={props.background}>
        <div className="background">
          {props.img ? (
            <div className="hero-logo ">
              <Image name={props.img} className="logo-image" alt={props.img} />
            </div>
          ) : (
            <div className="none"></div>
          )}
          <div className="hero-heading">
            <h1>{props.text}</h1>
          </div>
        </div>
      </BackgroundImages>
    </div>
  )
}

export default Hero
