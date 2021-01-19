import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import BlogSidebar from "../components/BlogSidebar";
import BackgroundImage from 'gatsby-background-image-es5';
import parse from 'html-react-parser';

const BlogPostTemplate = ({ data }) => {
  const page = data.allMarkdownRemark.nodes[0]

  const tags = page.frontmatter.tags ? page.frontmatter.tags : [];

  const processHtml = (html) => parse(html);
  
  return (
    <Layout
      fixedNav={true}
      title={page.frontmatter.title}
      description={page.frontmatter.description}
      additionalKeywords={page.frontmatter.tags.map(s => s.toLowerCase())}
    >
      <div className="bg-theme-primary select-white text-grey-lightest">
        <div className="container mx-auto py-24 pt-32 px-4">
          <h1 className="text-white">{page.frontmatter.title}</h1>
          <p className="font-bold">{page.frontmatter.date}</p>
          <p className="italic">{page.frontmatter.description}</p>
          <p>
            { page.frontmatter.tags.length ? (
              <div className="flex flex-wrap flex-row justify-left mt-6">
                { tags.map((tag) => (
                  <Link className="pill block my-2" to={"/blog/" + tag} key={tag}>
                    #{ tag }
                  </Link>
                )) }
              </div>
            ) : [] }
          </p>
        </div>
      </div>
      
      <div className="p-4">
        <div className="container m-auto w-full flex flex-col lg:flex-row">
          <div className="flex-grow m-8 py-12 pt-0 blog-post">
            { processHtml(page.html) }
          </div>
          
          <BlogSidebar className="m-4" />
        </div>
      </div>
    </Layout>
  )
};

export default BlogPostTemplate;
export const query = graphql`
  query($id: String) {
    allMarkdownRemark(filter: {id: {eq: $id}}) {
      nodes {
        html
        frontmatter {
          title
          description
          tags
          date(formatString: "MMMM DD, YYYY")
          image {
            childImageSharp {
              fluid(maxHeight: 1024) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
