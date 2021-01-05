import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import BackgroundImage from 'gatsby-background-image-es5';
import BlogSidebar from "../components/BlogSidebar";

function BlogPageUnfiltered({ data, posts, tag }) {
  const BlogPostListEntry = (node) => (
    <div className="m-4 p-4 bg-theme-primary rect-slant-corners select-white inline-block" key={node.frontmatter.slug}>
      <Img className="md:float-left w-48 h-48 mx-auto md:mr-8 md: -ml-4 -mt-4 rect-slant-corners" fluid={node.frontmatter.image.childImageSharp.fluid} alt={node.frontmatter.title} />
      <h2 className="text-white">{node.frontmatter.title}</h2>
      <p className="text-white"><b>{node.frontmatter.date}</b></p>
      <p className="text-grey-lightest m-4">{node.frontmatter.description}</p>
      <Link className="text-white mx-4 slantlink" to={"/blog/" + node.frontmatter.slug_date + "/" + node.frontmatter.slug}>Read More</Link>
    </div>
  );

  return (
    <Layout fixedNav={true} title="Blog" additionalKeywords={[ 'blog' ]}>
      <div className="bg-theme-primary select-white text-grey-lightest">
        <div className="container mx-auto py-24 pt-32 px-4">
          <h1 className="text-white">Welcome to my blog!</h1>
          <p>
            Check out my latest posts below.
            { tag ? `You're viewing all posts tagged '${tag}.'` : undefined }
          </p>
          <p className="mt-8">
            { tag ? (
              <Link
                className="pill align-middle"
                to="/blog"
              >
                #{ tag }
                <div className="inline-block ml-2 px-1 text-theme-primary">&#x2715;</div>
              </Link>
            ) : [] }
          </p>
        </div>
      </div>
      
      <div className="p-4">
        <div className="container m-auto w-full flex flex-col lg:flex-row">
          <div className="flex-grow py-12 flex flex-col">
            { posts.filter((p) => p).map(BlogPostListEntry) }
          </div>
          
          <BlogSidebar />
        </div>
      </div>
    </Layout>
  );
};

export { BlogPageUnfiltered };

export const query = graphql`
  query($tag : [String]) {
    allMarkdownRemark(filter: {frontmatter: {tags: {in: $tag}}}) {
      group(field: frontmatter___tags) {
        fieldValue
      }
      nodes {
        frontmatter {
          slug
          title
          date(formatString: "MMMM DD, YYYY")
          slug_date: date(formatString: "YYYY/MM/DD")
          description
          tags
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

export default ({ data, pageContext }) => BlogPageUnfiltered({
  data,
  posts: data.allMarkdownRemark.nodes,
  tag: pageContext.tag,
});

