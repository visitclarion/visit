import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "../components/image"

const Partners = () => {
  const data = useStaticQuery(graphql`
    query PartnersQuery {
      markdownRemark(fileAbsolutePath: { regex: "/partners-spotlight.md/" }) {
        frontmatter {
          firstpartnetimage
          firstpartnertitle
          firstpartnerdesc
          firstpartnerlink
          secondpartnetimage
          secondpartnertitle
          secondpartnerdesc
          secondpartnerlink
          thirdpartnetimage
          thirdpartnertitle
          thirdpartnerdesc
          thirdpartnerlink
        }
      }
    }
  `)

  return (
    <div>
      <div className="container">
        <h1 className="happeninh-now-main-title">Partners</h1>
        <div className="partners-parent">
          <div className="partners-child">
            <div className="partners-image">
              <Image
                name={data.markdownRemark.frontmatter.firstpartnetimage.replace(
                  "../src/images/",
                  ""
                )}
                className="logo-image"
              />
            </div>
            <h2>{data.markdownRemark.frontmatter.firstpartnertitle}</h2>
            <p>{data.markdownRemark.frontmatter.firstpartnerdesc}</p>
            <a
              href={data.markdownRemark.frontmatter.firstpartnerlink}
              target="_blank"
              rel="noreferrer"
            >
              <button className="main-button">Learn More</button>
            </a>{" "}
          </div>
          <div className="partners-child">
            <div className="partners-image">
              <Image
                name={data.markdownRemark.frontmatter.secondpartnetimage.replace(
                  "../src/images/",
                  ""
                )}
                className="logo-image"
              />
            </div>
            <h2>{data.markdownRemark.frontmatter.secondpartnertitle} </h2>
            <p>{data.markdownRemark.frontmatter.secondpartnerdesc}</p>
            <a
              href={data.markdownRemark.frontmatter.secondpartnerlink}
              target="_blank"
              rel="noreferrer"
            >
              <button className="main-button">Learn More</button>
            </a>{" "}
          </div>
          <div className="partners-child">
            <div className="partners-image">
              <Image
                name={data.markdownRemark.frontmatter.thirdpartnetimage.replace(
                  "../src/images/",
                  ""
                )}
                className="logo-image"
              />
            </div>
            <h2>{data.markdownRemark.frontmatter.thirdpartnertitle}</h2>
            <p>{data.markdownRemark.frontmatter.thirdpartnerdesc}</p>
            <a
              href={data.markdownRemark.frontmatter.thirdpartnerlink}
              target="_blank"
              rel="noreferrer"
            >
              <button className="main-button">Learn More</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partners
