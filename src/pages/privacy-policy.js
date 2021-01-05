import React from "react";

import Layout from "../components/layout";

function IndexPage() {
  const ghPrivacy = (
    <a
      href="https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-privacy-statement#github-pages"
      target="_blank"
    >
      their privacy policy
    </a>
  );
  return (
    <Layout
      fixedNav={true}
      title="Privacy Policy"
    >
      <div className="bg-theme-primary select-white text-grey-lightest">
        <div className="container mx-auto py-24 pt-32 px-4">
          <h1 className="text-white">Privacy Policy</h1>
          <p>
            This page is here to make it clear what information is collected
            when you use this website. I strive to ensure that only information
            necessary for secure operation of the website is collected.
          </p>
        </div>
      </div>
      <div>
        <div className="container mx-auto py-24 pt-32 px-4">
          <p>
            <b>Note:</b> This policy is subject to change without notice. This
            was last changed on 01/04/2021.
          </p>
          <h1>How We Collect and Use Information</h1>
          <h2>Hosting</h2>
          <p>
            GitHub Pages is used for hosting and usage of such information is
            governed by {ghPrivacy}. <b>No additional information is collected.
            </b> In the future, I hope to use IPFS and a self-hosted server for
            this, in which case I will be able to control exactly what happens.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
