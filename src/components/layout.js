import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql, Link } from "gatsby";
import SEO from "./seo";

import NavBar from "./navbar";

function Layout({ children, fixedNav, title, description, additionalKeywords, noindex }) {
  return (
    <div id="top" className="flex flex-col min-h-screen">
      <SEO
        title={title}
        description={description}
        lang="en"
        keywords={additionalKeywords}
        noindex={noindex}
      />

      <NavBar fixed={fixedNav} />

      {children}

      <footer className="p-4 py-16 bg-grey-lightest">
        <div className="m-auto container">
          <Link
            to="/privacy-policy"
            className="m-4 slantlink"
          >
            Privacy Policy
          </Link>
          
          <p className="text-grey">
            Licensed under the GPLv3. Using the <a
              href="https://www.fontsquirrel.com/fonts/amble"
              target="_blank"
            >
              Amble
            </a> font.
          </p>
        </div>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  fixedNav: PropTypes.bool,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  additionalKeywords: PropTypes.array,
  noindex: PropTypes.bool,
};

Layout.defaultProps = {
  fixedNav: false,
  additionalKeywords: [],
  noindex: false,
};

export default Layout;
