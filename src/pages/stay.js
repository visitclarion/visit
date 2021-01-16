import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import BackgroundImages from "../components/backgroundimage"
import Header from "../components/header"
import Footer from "../components/footer"
import Image from "../components/image"
import Hero from "../components/hero"
import SEO from "../components/seo"
import Partners from "../components/partners"

const Stay = () => {
  const data = useStaticQuery(graphql`
    query StayQuery {
      markdownRemark(fileAbsolutePath: { regex: "/stay.md/" }) {
        frontmatter {
          bannerImage
          bannertext
          herotitle
          herotext
          heroimage
          hotelsnmotelsimage
          hotelsnmotelstext
          hotelsnmotelslink
          apartmentimage
          apartmenttext
          apartmentlink
          Innimage
          Inntext
          Innlink
          cabinimage
          cabintext
          cabinlink
          campimage
          camptext
          camplink
          boatimage
          boattext
          boatlink
        }
      }
    }
  `)

  return (
    <div>
      <SEO title="Lodging" />
      <Header />
      <Hero
        text={data.markdownRemark.frontmatter.bannertext}
        background={data.markdownRemark.frontmatter.bannerImage.replace(
          "../src/images/",
          ""
        )}
      />{" "}
      <div className="container">
        <div className="eat">
          <div className="eat-text">
            <h1>{data.markdownRemark.frontmatter.herotitle}</h1>
            <p>{data.markdownRemark.frontmatter.herotext}</p>
          </div>
          <div className="eat-image">
            <Image
              name={data.markdownRemark.frontmatter.heroimage.replace(
                "../src/images/",
                ""
              )}
              alt="eat-image"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="parent">
          <div className="child">
            <BackgroundImages
              class="height"
              name={data.markdownRemark.frontmatter.hotelsnmotelsimage.replace(
                "../src/images/",
                ""
              )}
            >
              <div className="overlay">
                <div className="content-box">
                  <h2>{data.markdownRemark.frontmatter.hotelsnmotelstext}</h2>
                  <Link to={data.markdownRemark.frontmatter.hotelsnmotelslink}>
                    <button className="center main-button">Explore</button>
                  </Link>{" "}
                </div>
              </div>
            </BackgroundImages>
          </div>
          <div className="child">
            <BackgroundImages
              class="height"
              name={data.markdownRemark.frontmatter.Innimage.replace(
                "../src/images/",
                ""
              )}
            >
              <div className="overlay">
                <div className="content-box">
                  <h2>{data.markdownRemark.frontmatter.Inntext}</h2>
                  <Link to={data.markdownRemark.frontmatter.Innlink}>
                    <button className="center main-button">Explore</button>
                  </Link>{" "}
                </div>
              </div>
            </BackgroundImages>
          </div>
          <div className="child child-eat">
            <BackgroundImages
              class="height"
              name={data.markdownRemark.frontmatter.cabinimage.replace(
                "../src/images/",
                ""
              )}
            >
              <div className="overlay">
                <div className="content-box">
                  <h2>{data.markdownRemark.frontmatter.cabintext}</h2>
                  <Link to={data.markdownRemark.frontmatter.cabinlink}>
                    <button className="center main-button">Explore</button>
                  </Link>{" "}
                </div>
              </div>
            </BackgroundImages>
          </div>
          <div className="child child-eat">
            <BackgroundImages
              class="height"
              name={data.markdownRemark.frontmatter.campimage.replace(
                "../src/images/",
                ""
              )}
            >
              <div className="overlay">
                <div className="content-box">
                  <h2>{data.markdownRemark.frontmatter.camptext}</h2>
                  <Link to={data.markdownRemark.frontmatter.camplink}>
                    <button className="center main-button">Explore</button>
                  </Link>{" "}
                </div>
              </div>
            </BackgroundImages>
          </div>
          <div className="child child-eat">
            <BackgroundImages
              class="height"
              name={data.markdownRemark.frontmatter.apartmentimage.replace(
                "../src/images/",
                ""
              )}
            >
              <div className="overlay">
                <div className="content-box">
                  <h2>{data.markdownRemark.frontmatter.apartmenttext}</h2>
                  <Link to={data.markdownRemark.frontmatter.apartmentlink}>
                    <button className="center main-button">Explore</button>
                  </Link>{" "}
                </div>
              </div>
            </BackgroundImages>
          </div>
          <div className="child child-eat">
            <BackgroundImages
              class="height"
              name={data.markdownRemark.frontmatter.boatimage.replace(
                "../src/images/",
                ""
              )}
            >
              <div className="overlay">
                <div className="content-box">
                  <h2>{data.markdownRemark.frontmatter.boattext}</h2>
                  <Link to={data.markdownRemark.frontmatter.boatlink}>
                    <button className="center main-button">Explore</button>
                  </Link>{" "}
                </div>
              </div>
            </BackgroundImages>
          </div>
        </div>
      </div>
      <Partners />
      <Footer />
    </div>
  )
}

export default Stay
