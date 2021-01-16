import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import BackgroundImages from "../components/backgroundimage"
import Header from "../components/header"
import Footer from "../components/footer"
import Image from "../components/image"
import Hero from "../components/hero"
import SEO from "../components/seo"
import Partners from "../components/partners"

const Eat = () => {
  const data = useStaticQuery(graphql`
    query EateryQuery {
      markdownRemark(fileAbsolutePath: { regex: "/eat.md/" }) {
        frontmatter {
          mainImage
          bannertext
          herotitle
          herotext
          heroimage
          diningimage
          diningtext
          dininglink
          breweriesimage
          breweriestext
          brewerieslink
          wineriesimage
          wineriestext
          winerieslink
          distilleriesimage
          distilleriestext
          distillerieslink
        }
      }
    }
  `)

  return (
    <div>
      <SEO title="Places to Eat" />

      <Header />
      <Hero
        text={data.markdownRemark.frontmatter.bannertext}
        background={data.markdownRemark.frontmatter.mainImage.replace(
          "../src/images/",
          ""
        )}
      />
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
              name={data.markdownRemark.frontmatter.diningimage.replace(
                "../src/images/",
                ""
              )}
            >
              <div className="overlay">
                <div className="content-box">
                  <h2>{data.markdownRemark.frontmatter.diningtext}</h2>
                  <Link to={data.markdownRemark.frontmatter.dininglink}>
                    <button className="center main-button">Explore</button>
                  </Link>
                </div>
              </div>
            </BackgroundImages>
          </div>
          <div className="child">
            <BackgroundImages
              class="height"
              name={data.markdownRemark.frontmatter.breweriesimage.replace(
                "../src/images/",
                ""
              )}
            >
              <div className="overlay">
                <div className="content-box">
                  <h2>{data.markdownRemark.frontmatter.breweriestext}</h2>
                  <Link to={data.markdownRemark.frontmatter.brewerieslink}>
                    {" "}
                    <button className="center main-button">Explore</button>
                  </Link>
                </div>
              </div>
            </BackgroundImages>
          </div>
          <div className="child child-eat">
            <BackgroundImages
              class="height"
              name={data.markdownRemark.frontmatter.wineriesimage.replace(
                "../src/images/",
                ""
              )}
            >
              <div className="overlay">
                <div className="content-box">
                  <h2>{data.markdownRemark.frontmatter.wineriestext}</h2>
                  <Link to={data.markdownRemark.frontmatter.winerieslink}>
                    {" "}
                    <button className="center main-button">Explore</button>
                  </Link>
                </div>
              </div>
            </BackgroundImages>
          </div>
          <div className="child child-eat">
            <BackgroundImages
              class="height"
              name={data.markdownRemark.frontmatter.distilleriesimage.replace(
                "../src/images/",
                ""
              )}
            >
              <div className="overlay">
                <div className="content-box">
                  <h2>{data.markdownRemark.frontmatter.distilleriestext}</h2>
                  <Link to={data.markdownRemark.frontmatter.distillerieslink}>
                    {" "}
                    <button className="center main-button">Explore</button>
                  </Link>
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

export default Eat
