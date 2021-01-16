import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import "../style/style.css"
import SEO from "../components/seo"
import Hero from "../components/hero"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        blogtitle
        author
        mainblogimage {
          relativePath
        }
      }
    }
  }
`

const Blog = props => {
  return (
    <div>
      <SEO title={props.data.markdownRemark.frontmatter.blogtitle} />
      <Header />

      <div className="blogpost">
        <Hero
          text={props.data.markdownRemark.frontmatter.blogtitle}
          background={
            props.data.markdownRemark.frontmatter.mainblogimage.relativePath
          }
        />

        <div className="container">
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
          />
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default Blog
