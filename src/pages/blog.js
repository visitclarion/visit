import React from "react"
import BlogRoll from "../components/BlogRoll"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Partners from "../components/partners"

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <div>
        <SEO title="Blog" />
        <Header />
        

        <Hero
          text='Blog'
          background='clarion-countyhouse'
        />

        <section>
          <div className="blog">
            <BlogRoll />
            <Partners />

          </div>
        </section>
        <Footer />
      </div>
    )
  }
}
