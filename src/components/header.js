import React, { useState } from "react"
import "../style/header.css"
import { GiHamburgerMenu } from "react-icons/gi"
import { Link } from "gatsby"
import headerlogo from "../images/headerlogo.png"

const Header = () => {
  const [drop, setDrop] = useState(false)

  const onClick = () => {
    console.log("onClick")
    setDrop(!drop)
    console.log(drop)
  }
  return (
    <div className="header">
      <div className="container">
        <nav>
          <div className="toggle">
            <Link to="/">
              <div className="logo">
                <img src={headerlogo} alt="logo" width="250px" />
              </div>
            </Link>
            <div className="menu" id="menu">
              <GiHamburgerMenu onClick={onClick} />
            </div>
          </div>
          <Link to="/">
            <div className="logo_large">
              <img src={headerlogo} alt="logo" width="250px" />
            </div>
          </Link>
          <ul id="UL" className={drop ? "active" : ""}>
            <Link to="/eat">
              <li>Places to Eat</li>
            </Link>
            <Link to="/stay">
              <li>Lodging</li>
            </Link>
            <Link to="/events">
              <li>Events</li>
            </Link>
            <Link to="/blog">
              <li>News</li>
            </Link>
            <Link to="">
              <li>Contact</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
