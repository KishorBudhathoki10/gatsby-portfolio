import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        siteTitle: title
        siteUrl
        image
        siteDescription: description
        author
        twitterUsername
      }
    }
  }
`
const SEO = ({ title, description }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(query)

  const {
    siteDescription,
    siteTitle,
    siteUrl,
    image,
    author,
    twitterUsername,
  } = siteMetadata

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle} `}>
      <meta name="description" content={description || siteDescription} />
      <meta name="image" content={image} />

      {/* Twitter cards */}

      <meta name="teitter:card" content="summary_large_image" />
      <meta name="twitter:card" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
    </Helmet>
  )
}

export default SEO
