import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Iphone8 = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "apple-iphone-8-plus-0.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
  
)
    export default Iphone8
