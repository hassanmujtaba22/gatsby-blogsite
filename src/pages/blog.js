import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout/Layout";
import "../components/style/blog.css"

const blog = ({ data: {blogs} }) => {
    return (
        <Layout>
          <section className="section">
            {blogs.nodes.map((blog =>{
                return (
                  <div className="box" key={blog.id}>
                    <Link style={{color: "black"}} to={`/blog/${blog.slug}`}>
                        <h1>{blog.blogTitle}</h1>
                        <img style={{width: "100%"}} src={blog.blogImage.fluid.src} alt={blog.blogTitle}/>
                    </Link>
                    </div>
                )
            }))}
          </section>
        </Layout>
    )
}

export const query = graphql`
  {
    blogs: allContentfulBlog {
      nodes {
        id
        blogTitle
        blogImage {
          fluid {
            src
          }
        }
        slug
      }
    }
  }
`

export default blog