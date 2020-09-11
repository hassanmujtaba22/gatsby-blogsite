import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/js/bootstrap.min.js'
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
