import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    const { navToggle, navToggler } = props
    return (
        <div>
            <div className={`map map-${navToggle ? "open" : "closed"}`}>
                <div className={`navbar navbar-${navToggle ? "open" : "closed"}`} >
                    <div className="navbar-links">
                        <Link to="/"> Home  </Link>
                        <Link to="/AboutUs"> About Park U</Link>
                        <Link to="/savedParking"> Saved Parking</Link>
                    </div>
                </div>
                
            </div>
            <button onClick={navToggler} className={`nav-button nav-button-${navToggle ? "open" : "closed"}`}>|||</button>
        </div>
    )
}

export default Navbar