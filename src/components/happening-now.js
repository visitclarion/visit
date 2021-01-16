import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const HappeningNow = () => {
  const data = useStaticQuery(graphql`
    query HomepageEventsQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: {
          frontmatter: {
            diningcategory: { ne: true }
            page: { ne: true }
            blogpage: { ne: true }
          }
        }
        limit: 5
      ) {
        edges {
          node {
            excerpt(pruneLength: 400)
            id
            frontmatter {
              path
              title
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `)

  console.log(
    data.allMarkdownRemark.edges[0].node.frontmatter.date.split(" ")[0]
  )
  return (
    <div>
      <div className="container">
        <h1 className="happeninh-now-main-title">Happening Now</h1>
        <div className="happening-now-parent">
          {data.allMarkdownRemark.edges.map(edge => (
            <Link to={`/events/${edge.node.frontmatter.path}`}>
              <div className="happening-now-child">
                <div className="happening-now-date">
                  <span>
                    {edge.node.frontmatter.date.split(" ")[1].slice(0, 2)}
                  </span>
                  <span>
                    {edge.node.frontmatter.date.split(" ")[0].slice(0, 3)}
                  </span>
                </div>
                <div className="happening-now-title">
                  {" "}
                  <h2>{edge.node.frontmatter.title} </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HappeningNow
