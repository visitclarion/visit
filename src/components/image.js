import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"

const Image = props => (
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
                fluid(quality: 64) {
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
        <Img
          alt={props.alt}
          fluid={image.node.childImageSharp.fluid}
          style={{ display: "block" }}
        />
      )
    }}
  />
)

export default Image
