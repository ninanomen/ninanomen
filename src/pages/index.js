import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./main.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation sullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
  </Layout>
)

export default IndexPage
