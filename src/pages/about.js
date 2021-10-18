import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"

const About = () => {
  return (
    <Layout>
      <Metadata title="about" description="Find out more about me here" />
      <h1>About Page</h1>
      <p>Mike is a developer, father, creator, and engineer</p>
    </Layout>
  )
}

export default About
