import React from "react"
import { graphql, Link } from "gatsby"
import BackgroundImages from "../components/backgroundimage"
import Image from "../components/image"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"

export const query = graphql`
  query($slug: String!) {
    allMarkdownRemark(filter: { frontmatter: { categories: { eq: $slug } } }) {
      edges {
        node {
          frontmatter {
            title
            thumbnail
            path
            categories
            blogimage 
          }
        }
      }
    }
  }
`

const Category = props => {
  console.log(props.location.pathname
    .replace("/category/", "")
    .trim()
    )
  return (
    <div>
      <Header />
      <SEO
        title={props.location.pathname
          .replace("/category/", "")
          .trim()
          .replace("-", " ")
          .replace(/(^\w{1})|(\s+\w{1})/g, c => c.toUpperCase())}
      />
      <BackgroundImages
        class="height"
        name={props.location.pathname
          .replace("/category/", "")
          .trim()
          }
      >
        <div className="overlay">
          <div className="content-box">
            <h1>
              {props.location.pathname
          .replace("/category/", "")
          .trim()
          .replace("-", " ")
          .replace(/(^\w{1})|(\s+\w{1})/g, c => c.toUpperCase())}
            </h1>
          </div>
        </div>
      </BackgroundImages>
      <div className="blogpost">
        <div className="container">
          <div className="blogpost-header">
            <div className="parent-category">
              {props.data.allMarkdownRemark.edges.map((edge, id) => (
                <div className="child-category" key={id}>
                  <div className="featured-image">
                    <Image
                      alt="featured-image"
                      name={edge.node.frontmatter.blogimage}
                    />
                  </div>
                  <div className="post-meta">
                    <h2> {edge.node.frontmatter.title}</h2>
                    <Link to={"/" + edge.node.frontmatter.path}>
                      {" "}
                      <button className="main-button cat-button">
                        Learn More
                      </button>{" "}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Category
