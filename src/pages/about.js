import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Title from "../components/Title"
import Image from "gatsby-image"
import SEO from "../components/SEO"

const About = ({ data }) => {
  const {
    allStrapiAbouts: { nodes },
  } = data

  const { title, info, stack, image } = nodes[0]

  return (
    <Layout>
      <SEO title="About" description="about gatsbyPortfolio" />
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={image.childImageSharp.fluid} className="about-img" />

          <article className="about-text">
            <Title title={title} />

            <p>{info}</p>

            <div className="about-stack">
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiAbouts {
      nodes {
        title
        info
        stack {
          id
          title
        }
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

export default About
