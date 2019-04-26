import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Iphonexs = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "iphone-xs-img.jpg" }) {
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
    export default Iphonexs
