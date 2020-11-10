import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"

const Blog = ({ data }) => {
  const {
    allStrapiBlogs: { nodes: blogs },
  } = data

  return (
    <Layout>
      <SEO title="Blog" description="My bolg page" />

      <section className="blog-page">
        <Blogs blogs={blogs} title="blog" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        date(formatString: "MMMM Do, YYYY")
        description
        slug
        id
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Blog
