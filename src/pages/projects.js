import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

import Projects from "../components/Projects"
import SEO from "../components/SEO"

const ProjectsPage = ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data

  return (
    <Layout>
      <SEO title="Projects" description="This is my projects page" />

      <section className="projects-page">
        <Projects projects={projects} title="all projects" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(sort: { fields: created_at, order: DESC }) {
      nodes {
        strapiId
        description
        title
        url
        github
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`

export default ProjectsPage
