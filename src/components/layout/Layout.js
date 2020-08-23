import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import "../style/blog.css"

function Layout({children}) {
    return (
        <>
            <Header/>
                <main className="container-fluid">
                    {children}
                </main>
            <Footer/>
        </>
    )
}

export default Layout
