import React from 'react'
import { Link } from 'gatsby'
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav"
function Header() {
    return (
        <Navbar bg="light" expand="lg" className="navbar">
            <Navbar.Brand className="navbar-brand" href="/">Hassan Mujtaba</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="navbar-collapse" id="basic-navbar-nav">
                <Nav className="mr-auto navbar-nav">
                    <Link className="nav-link nav-item" to="/">Home</Link>
                    <Link className="nav-link nav-item" to="/blog">Blogs</Link>
                    <Link className="nav-link nav-item" to="/about">About</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
