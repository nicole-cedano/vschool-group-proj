import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    const { navToggle, navToggler } = props
    return (
        <div>
            <div className="map">
                <div onClick={navToggler} className={`navbar navbar-${navToggle ? "open" : "closed"}`} >
                    <div className="navbar-links">
                        <Link to="/">Home</Link>
                        <Link to="/findparking">Find Parking</Link>
                        <Link to="/mysavedparking">My ♡ Parking</Link>
                        <Link to="/AboutUs"> About Park U</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar