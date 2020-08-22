import React from 'react'
import Layout from '../components/layout/Layout'

const BlogPage = ({pageContext: {data}}) => {
    //  console.log(data);
    return (
        <Layout>
            <section style={{width: "100%"}}>
                <h2>{data.blogTitle}</h2>
                <img style={{width: "100px"}} src={data.blogImage.fluid.src} alt={data.blogTitle} />
                <p>{data.blogContent.blogContent}</p>
            </section>
        </Layout>
    )
}

export default BlogPage
