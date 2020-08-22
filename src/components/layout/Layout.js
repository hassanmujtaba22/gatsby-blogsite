import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'

function Layout({children}) {
    return (
        <>
            <Header/>
                <main style={{height: "100%", width: "100%"}}>
                    {children}  
                </main>
            <Footer/>
        </>
    )
}

export default Layout
