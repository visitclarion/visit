import React from "react"
import { Link } from "gatsby"
import {
  AiFillTwitterSquare,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai"

import "../style/footer.css"
import stamp from "../images/headerlogo.png"

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="pages">
            <Link to="/eat">
              <p>Place to Eat</p>
            </Link>
            <Link to="/">
              <p>Lodging</p>
            </Link>
            <Link to="/">
              <p>Events</p>
            </Link>
            <Link to="/">
              <p>News</p>
            </Link>
          </div>
          <div className="svg">
            <div className="hr">
              <hr />
            </div>
            <img src={stamp} alt="logo" />
            <div className="hr">
              <hr />
            </div>
          </div>
          <div className="linked">
            <div className="social">
              <a
                href="https://twitter.com/qualoom"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillTwitterSquare />
              </a>
              <a
                href="https://www.facebook.com/qualoom.expertise.3"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillFacebook />
              </a>
              <a
                href="https://www.linkedin.com/company/qualoom/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin />
              </a>
            </div>
          </div>
          <div className="copy-right">
            <p>Copyright Visit Calorin. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
