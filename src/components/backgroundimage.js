import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import React from "react"

const BackgroundImages = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(
          filter: { extension: { in: ["png", "jpg", "jpeg", "PNG"] } }
        ) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 2048, quality: 64) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.name)
      })
      if (!image) {
        return null
      }

      return (
        <BackgroundImage
          className={props.class}
          fluid={image.node.childImageSharp.fluid}
        >
          {props.children}
        </BackgroundImage>
      )
    }}
  />
)

export default BackgroundImages
