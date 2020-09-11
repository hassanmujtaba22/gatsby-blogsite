import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout/Layout";
const blog = ({ data: {blogs} }) => {
    return (
        <Layout>
          <section className="section-blog row p-5">
            {blogs.nodes.map((blog =>{
                return (
                  <div className="box card col-xl-4 col-lg-6 col-md-12 p-2" key={blog.id}>
                    <Link className="link" to={`/blog/${blog.slug}`}>
                        <img className="card-img-top" src={blog.blogImage.fluid.src} alt={blog.blogTitle}/>
                        <h1 className="card-title">{blog.blogTitle}</h1>
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