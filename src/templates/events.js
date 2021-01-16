import React from "react"
import { graphql } from "gatsby"
import BackgroundImages from "../components/backgroundimage"
import Partners from "../components/partners"
import Header from "../components/header"
import Footer from "../components/footer"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        contact
        address
        website
        eventimage {
          relativePath
        }
      }
    }
  }
`

const Events = props => {
  return (
    <div>
      <Header />
      <BackgroundImages
        class="height"
        name={props.data.markdownRemark.frontmatter.eventimage.relativePath}
      >
        <div className="overlay">
          <div className="content-box">
            <h1 className="maxwidth">
              {props.data.markdownRemark.frontmatter.title}
            </h1>
          </div>
        </div>
      </BackgroundImages>
      <div className="blogpost">
        <div className="container">
          <div className="blogpost-header">
            <div className="blogpost-main">
              <h1 className="heading">
                {props.data.markdownRemark.frontmatter.title}
              </h1>
              <p>{props.data.markdownRemark.frontmatter.contact}</p>
              <a
                href={props.data.markdownRemark.frontmatter.contact}
                target="_blank"
                rel="noreferrer"
              >
                {props.data.markdownRemark.frontmatter.website}
              </a>

              <p>{props.data.markdownRemark.frontmatter.address}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        />
      </div>
      <Partners />

      <Footer />
    </div>
  )
}

export default Events
