import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import BackgroundImages from "../components/backgroundimage"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"
import Hero from "../components/hero"
import HappeningNow from "../components/happening-now"
import Partners from "../components/partners"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      markdownRemark(fileAbsolutePath: { regex: "/index.md/" }) {
        frontmatter {
          video
          thumbnail
          bannerlogo
          hotelbackground
          hoteltext
          eaterybackground
          eaterytext
          eventbackground
          eventtext
        }
      }
    }
  `)

  return (
    <div>
      <SEO title="Home" />
      <Header />
      <div>
     
      <div>
      <video
          src={data.markdownRemark.frontmatter.video}
          autoPlay
          loop
          muted
        ></video>
      
      </div>
    </div>
      <div>
        <div className="container">
          <div className="parent">
            <div className="child">
              <BackgroundImages
                class="height"
                name={data.markdownRemark.frontmatter.hotelbackground.replace(
                  "../src/images/",
                  ""
                )}
              >
                <div className="overlay">
                  <div className="content-box">
                    <h2>{data.markdownRemark.frontmatter.hoteltext}</h2>
                    <Link to="/stay">
                      <button className="center main-button">Explore</button>
                    </Link>
                  </div>
                </div>
              </BackgroundImages>
            </div>
            <div className="child">
              <BackgroundImages
                name={data.markdownRemark.frontmatter.eaterybackground.replace(
                  "../src/images/",
                  ""
                )}
              >
                <div className="overlay">
                  <div className="content-box">
                    <h2>{data.markdownRemark.frontmatter.eaterytext}</h2>
                    <Link to="/eat">
                      <button className="center main-button">Explore</button>
                    </Link>
                  </div>
                </div>
              </BackgroundImages>
            </div>
            <div className="child">
              <BackgroundImages
                name={data.markdownRemark.frontmatter.eventbackground.replace(
                  "../src/images/",
                  ""
                )}
              >
                <div className="overlay">
                  <div className="content-box">
                    <h2>{data.markdownRemark.frontmatter.eventtext}</h2>
                    <Link to="/events">
                      <button className="center main-button">Explore</button>
                    </Link>
                  </div>
                </div>
              </BackgroundImages>
            </div>
          </div>
        </div>
      </div>
      <HappeningNow />
      <Partners />
      <Footer />
    </div>
  )
}

export default IndexPage
