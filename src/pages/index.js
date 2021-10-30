import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { StaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";

function IndexPage({ data }) {
  const projects = data.allFile.nodes
    .filter((d) => d.childMarkdownRemark)
    .map(({ childMarkdownRemark }, i) => {
      const buttons = childMarkdownRemark.frontmatter.buttons.map(({ title, url }, i) => (
        <React.Fragment key={i}>
          { i === 0 ? '' : '/' }
          <a className="text-white mx-3 slantlink" href={url}>{ title }</a>
        </React.Fragment>
      ))
      return (
        <div className="max-w-64 m-8 blue-ext-box-hover" key={i}>
          <div className="rect-slant-corners bg-theme-primary text-grey-lightest select-white inline-block h-full flex flex-col">
            <Img className="w-full" fluid={childMarkdownRemark.frontmatter.image.childImageSharp.fluid} />
            <div className="p-4">
              <h3 className="text-white">{ childMarkdownRemark.frontmatter.title }</h3>
              <p>{ childMarkdownRemark.frontmatter.description }</p>
            </div>
            <div className="flex-grow w-full" />
            <p className="p-4">{ buttons }</p>
          </div>
        </div>
      )
    })

  return (
    <Layout
      fixedNav={true}
      title="Nathan Pennie"
      additionalKeywords={[ 'about', 'projects' ]}
    >
      <div id="about" className="bg-theme-primary select-white text-grey-lightest">
        <div className="container mx-auto py-24 pt-32 px-4">
          <h1 className="text-white">Hi, I'm Nathan Pennie</h1>
          <p>
            I enjoy alpine ski racing, flying gliders, and working on my many
            projects. I've recently been involved projects surrounding
            the <a href="https://matrix.org" target="_blank">Matrix</a> protocol
            and I often work with open source and free software. I also help out
            at <a href="https://nescitech.org" target="_blank">New England
            Sci-Tech</a>, a local startup makerspace in Natick, MA. I am often
            identified by my username (KB1RD), which is an amateur radio
            callsign. On weekends, I can be found skiing (usually at Cannon) or
            flying with the Greater Boston Soaring Club or the Franconia Soaring
            Association.
          </p>
        </div>
      </div>
      <div id="projects" className="text-center">
        <div className="container mx-auto py-24 pt-32 px-4">
          <h1>Projects</h1>
          <p>Here's what I've been working on</p>

          <div className="flex flex-row flex-wrap items-stretch justify-center">
            { projects }
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "projects"}}, sort: {fields: childMarkdownRemark___frontmatter___order, order: ASC}) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            order
            title
            image {
              childImageSharp {
                fluid(maxWidth: 256) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            description
            buttons {
              title
              url
            }
          }
        }
      }
    }
  }
`

export default IndexPage;
