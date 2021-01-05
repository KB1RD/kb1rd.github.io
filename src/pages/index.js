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
      title="Home"
      additionalKeywords={[ 'about', 'projects' ]}
    >
      <div id="about" className="bg-theme-primary select-white text-grey-lightest">
        <div className="container mx-auto py-24 pt-32 px-4">
          <h1 className="text-white">Hi, I'm Nathan Pennie</h1>
          <p>
            When I'm not ski racing, I enjoy computer programming and electrical
            engineering. I use these skills to do small jobs, such as small
            business websites or beginner electronics kits. I have an Amateur
            Extra class radio license (hence the callsign, KB1RD) and I can be
            found on the Sci-Tech Amateur Radio Society Tuesday radio nets. I
            use Linux as my primary OS and I can program in a wide variety of
            languages. Of course, nearly every weekend during the winter, I can
            be found skiing at my favorite ski mountain, Cannon.
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
