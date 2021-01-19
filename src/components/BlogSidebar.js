import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `}
    render={data => (
      <div className="lg:w-64 flex-shrink-0">
        <div className="m-4 leading-loose text-center">
          <h1 className="mb-6">Tags</h1>
          <div className="flex flex-wrap flex-row justify-around">
            { data.allMarkdownRemark.group.map(({ fieldValue }) => (
              <Link className="pill block my-2" to={"/blog/" + fieldValue} key={fieldValue}>
                #{ fieldValue }
              </Link>
            )) }
          </div>
        </div>
      </div>
    )}
  />
)
