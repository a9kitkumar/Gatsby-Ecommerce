import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Iphonex = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "apple-iphone-x-new-1.jpg" }) {
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
    export default Iphonex
