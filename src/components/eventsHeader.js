import React from "react"
import {  graphql,  useStaticQuery } from "gatsby"
import Hero from "./hero"

const Headers = () => {
  const datas = useStaticQuery(graphql`
    query EventsPageQuery {
      markdownRemark(fileAbsolutePath: { regex: "/events.md/" }) {
        frontmatter {
          eventBannerImage
          bannertext
        }
      }
    }
  `)

  return (
    <div>
      <Hero
        text={datas.markdownRemark.frontmatter.bannertext}
        background={datas.markdownRemark.frontmatter.eventBannerImage.replace(
          "../src/images/",
          ""
        )}
      />
    </div>
  )
}

export default Headers
