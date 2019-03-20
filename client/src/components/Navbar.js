import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/"> Home  </Link>
            <Link to="/AboutUs"> About Park U</Link>
        </div>
    )
}

export default Navbar