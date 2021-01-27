import React from "react";

import { graphql } from "gatsby";
import { BlogPageUnfiltered } from "../templates/BlogPage.js";

export const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}, sort: {order: DESC, fields: childMarkdownRemark___frontmatter___date}) {
      nodes {
        childMarkdownRemark {
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
  }
`;

// Again, a sneaky way to use only one template
export default ({ data }) => BlogPageUnfiltered({
  data,
  posts: data.allFile.nodes.map(({ childMarkdownRemark }) => childMarkdownRemark)
});
