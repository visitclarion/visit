import React, { useState } from "react"
import Calendar from "react-calendar"
import moment from 'moment'
import "react-calendar/dist/Calendar.css"
import SEO from "../components/seo"
import PropTypes from "prop-types"
import { Link, graphql, StaticQuery, useStaticQuery } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import Image from "../components/image"
import "../style/style.css"
import Headers from "../components/eventsHeader"

const Events = props => {

    
  const [value, onChange] = useState('')
  const { data } = props
  const { edges: posts } = data.allMarkdownRemark
  const newPosts = value === '' ?  posts : posts.filter(post => post.node.frontmatter.date.includes(moment(value).format("MMMM DD, YYYY")))
  console.log(newPosts)

  return (
    <div>
      <SEO title="Events Happening Around You" />
      
      <Header />
    <Headers />
      <div className="container">
        <div className="blogpost">
          <div className="container">
            <div className='cal' style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between' }}>
              <div className="parent-category">
                {newPosts &&
                  newPosts.map(({ node: post }) => (
                    <div className="child-category" key={post.id}>
                      <div className="featured-image">

                        <Image
                          alt="featured-image"
                          name={post.frontmatter !== 'null' ? post.frontmatter.eventimage.relativePath : ''}
                        />
                      </div>
                      <div className="post-meta">
                        <h2> {post.frontmatter.title}</h2>
                        <Link to={post.frontmatter.path}>
                          <button className="main-button cat-button">
                            Learn More
                          </button>
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
              <div style={{marginTop: '50px'}}>
                <Calendar className='calendar' onChange={onChange} value={value} />
                <button className='main-button' style={{marginTop: '20px'}} onClick={() => onChange('')}>See All Events</button>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

Events.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query EventsQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {
            frontmatter: {
              diningcategory: { ne: true }
              page: { ne: true }
              blogpage: { ne: true }
            }
          }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              frontmatter {
                path
                title

                eventimage {
                  relativePath
                }
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Events data={data} count={count} />}
  />
)
