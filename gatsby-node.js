const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const BlogPostTemplate = path.resolve("./src/templates/BlogPost.js");
  const BlogPageTemplate = path.resolve("./src/templates/BlogPage.js");
  
  return graphql(`
    {
      allMarkdownRemark {
        group(field: frontmatter___tags) {
          fieldValue
        }
        nodes {
          id
          frontmatter {
            slug
            date(formatString: "YYYY/MM/DD")
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors;
    }
    
    const blogPosts = result.data.allMarkdownRemark.nodes;
    
    blogPosts.forEach(({ id, frontmatter }) => {
      if (!id || !frontmatter.slug || !frontmatter.date) {
        console.warn(`Rejected post ${id} because it is missing the slug or date`);
        return
      }

      console.info(`Created blog post /blog/${frontmatter.date}/${frontmatter.slug}`);
      
      createPage({
        path: `/blog/${frontmatter.date}/${frontmatter.slug}`,
        component: BlogPostTemplate,
        context: { id },
      });
    });
    
    const blogTags = result.data.allMarkdownRemark.group;
    
    blogTags.forEach(({ fieldValue }) => {
      createPage({
        path: `/blog/${fieldValue}`,
        component: BlogPageTemplate,
        context: {
          tag: fieldValue,
        },
      });
    });
  });
}
