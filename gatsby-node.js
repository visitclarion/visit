// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

const path = require(`path`)

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve(`./src/templates/dining.js`)
  const categoryTemplate = path.resolve(`./src/templates/category.js`)
  const blog = path.resolve(`./src/templates/blog.js`)
  const events = path.resolve(`./src/templates/events.js`)

  const response = await graphql(`
    {
      allMarkdownRemark(
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
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  response.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blog,
      path: `/blog/${edge.node.frontmatter.path}`,

      context: {
        slug: edge.node.frontmatter.path,
      }, // additional data can be passed via context
    })
  })
  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            blogpage: { ne: true }
            page: { ne: true }
            eventpage: { ne: true }
          }
        }
      ) {
        edges {
          node {
            frontmatter {
              path
              categories
            }
          }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/${edge.node.frontmatter.path}`,

      context: {
        slug: edge.node.frontmatter.path,
      }, // additional data can be passed via context
    })
  })

  const result_data = await graphql(`
    {
      allMarkdownRemark(
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
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  result_data.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: events,
      path: `/events/${edge.node.frontmatter.path}`,

      context: {
        slug: edge.node.frontmatter.path,
      }, // additional data can be passed via context
    })
  })

  const results = await graphql(`
    {
      allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___categories) {
          fieldValue
        }
      }
    }
  `)

  results.data.allMarkdownRemark.group.forEach(edge => {
    createPage({
      component: categoryTemplate,
      path: `/category/${edge.fieldValue.replace(" ", "-")}`,

      context: {
        slug: edge.fieldValue,
      }, // additional data can be passed via context
    })
  })
}
