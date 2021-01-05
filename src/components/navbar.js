import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

function NavBar({ siteTitle, fixed }) {
  const [isExpanded, toggleExpansion] = useState(false);
  
  const aClasses = fixed ? "fixed" : "sticky";

  const links = [
    { name: "About", to: "/#about" },
    { name: "Projects", to: "/#projects" },
    { name: "Blog", to: "/blog" },
  ];
  
  const linkElements = links.map(({ name, to }) => (
    <Link
      to={ to }
      key={ name }
      className="navlink block slantlink md:inline-block no-underline mx-4 my-1"
    >
      { name }
    </Link>
  ));

  return (
    <nav className={"t-4 bg-theme-primary nottop:shadow-lg top-0 w-full z-50 " + aClasses + (isExpanded ? " shadow-lg" : "")} data-expanded={isExpanded ? "true" : "false"}>
      <div className="flex flex-wrap items-stretch items-center justify-between">
        <div className="flex-grow bg-grey-lightest navbar-slant-flat -mb-2" />
        <div className="flex-grow flex flex-wrap max-w-4xl">
          <div className="flex flex-row items-center navbar-slant -mb-2">
            <Link to="/" className="navlink no-link-hover-fx flex flex-row items-center mx-4 no-underline">
              <span className="text-theme-primary font-bold text-xl tracking-normal -my-1">KB1RD</span>
              <span className="text-theme-primary font-thin text-xl tracking-wider -my-1">.net</span>
            </Link>
          </div>

          <button
            className="navlink block md:hidden flex items-center px-3 py-2 rounded hover:text-white ml-auto"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <svg
              className="fill-current h-3 w-3 mx-2 my-1"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>

          <div className="hidden md:block md:flex md:items-center w-full md:w-auto flex-grow p-4 select-white t-4">
            <div className="text-sm">{ linkElements }</div>
          </div>
        </div>
        <div className="flex-grow hidden md:block" />
      </div>

      <div className={(isExpanded ? "block" : "hidden") + " md:hidden md:flex md:items-center w-full md:w-auto flex-grow p-4 select-white t-4"}>
        <div className="text-sm">{ linkElements }</div>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  siteTitle: PropTypes.string,
  fixed: PropTypes.bool,
};

NavBar.defaultProps = {
  siteTitle: ``,
  fixed: false
};

export default NavBar;
