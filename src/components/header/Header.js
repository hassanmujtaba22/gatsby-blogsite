import React from 'react'
import "./Header.css"
import { Link } from 'gatsby'

function Header() {
    return (
        <nav className="nav">
            <div className="logo">
                <h2><a href="/">{"< Hassan Mujtaba />"}</a></h2>
            </div>
            <ul className="navLink">
                <li>
                <Link className="link" to="/blog">Blogs</Link>
                </li>
                <li>
                <Link className="link" to="/about">About</Link>
                </li>
                <li>
                <Link className="link" to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header
