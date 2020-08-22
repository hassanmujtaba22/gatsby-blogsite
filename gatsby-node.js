const path = require("path")
exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions
  const result = await graphql(`
  {
    allContentfulBlog {
      nodes {
        blogTitle
        blogContent {
          blogContent
        }
        blogImage {
          fluid {
            src
          }
        }
        slug
      }
    }
  }
  `)
  result.data.allContentfulBlog.nodes.forEach((data) => {
    createPage({
      path: `/blog/${data.slug}`,
      component: path.resolve("./src/templates/BlogPage.js"),
      context: {
        data: data
      }
    })
  })
  // console.log("result----", JSON.stringify(result));
}