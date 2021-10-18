import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Metadata from "../components/metadata"

const NotFound = () => {
  return (
    <Layout>
      <Metadata title="404" description="You done fked up now!" />
      <h1> 404: Page Not Found</h1>
      <p>
        <Link to="/blog/">Check our latest articles</Link>
      </p>
    </Layout>
  )
}

export default NotFound
