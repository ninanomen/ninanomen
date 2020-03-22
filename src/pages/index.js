import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p 
    style={{
        fontSize: `40px`,
        marginTop: `10rem`,
        marginLeft: `3rem`,
      }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis <mark>nostrud exercitation</mark> ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
  </Layout>
)

export default IndexPage
