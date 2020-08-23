import React from 'react'
import Layout from '../components/layout/Layout'

const BlogPage = ({pageContext: {data}}) => {
    //  console.log(data);
    return (
        <Layout>
            <section className="blogPage row p-5">
                <h1 className="col-12 order-sm-1">{data.blogTitle}</h1>
                <p className="col-lg-8 order-lg-2 order-md-3 order-3">{data.blogContent.blogContent}</p>
                <img className="col-lg-4 order-lg-3 order-md-2 order-2" src={data.blogImage.fluid.src} alt={data.blogTitle} />
            </section>
        </Layout>
    )
}

export default BlogPage
