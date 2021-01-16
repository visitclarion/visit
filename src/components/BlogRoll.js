import React from "react"
import PropTypes from "prop-types"
import { Link, graphql, StaticQuery } from "gatsby"
import Image from "../components/image"
import "../style/style.css"
//import SideBlogRoll from "./side-blogroll"

const BlogRoll = props => {
  const { data } = props
  const { edges: posts } = data.allMarkdownRemark

  return (
    <div>
      <div className="container">
        <div className="sections">
          <section>
            {posts &&
              posts.map(({ node: post }) => (
                <div key={post.id}>
                  <article>
                    <header>
                      <div className="featured-blog-image">
                        <Link to={post.frontmatter.path}>
                          <Image
                            alt="family"
                            name={post.frontmatter.mainblogimage.relativePath}
                          />
                        </Link>
                      </div>
                      <div className="post-meta-blog">
                        <Link
                          className="title has-text-primary is-size-4"
                          to={post.frontmatter.path}
                        >
                          <h2> {post.frontmatter.blogtitle}</h2>
                          <span>{post.frontmatter.author}</span>
                          <span> &bull; </span>
                          <span className="">{post.frontmatter.date}</span>
                        </Link>
                      </div>

                      <p className="excerpt">{post.excerpt}</p>
                    </header>
                    <br />
                    <br />
                  </article>
                </div>
              ))}
          </section>
          <section></section>
        </div>
      </div>
    </div>
  )
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {
            frontmatter: {
              diningcategory: { ne: true }
              page: { ne: true }
              eventpage: { ne: true }
            }
          }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              frontmatter {
                path
                blogtitle
                author
                mainblogimage {
                  relativePath
                }
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
