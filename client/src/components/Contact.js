import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div >
            Built by:
        <div className="links">
                <div className="linksto">
                    <h4>Pauline Makoma</h4>
                    <a href="https://github.com/Pauline177"> <img src={('https://tse3.mm.bing.net/th?id=OIP._x0yLaog2BHZg-Se56CkowHaHa&pid=15.1&P=0&w=300&h=300')} /> </a>
                    <a href="https://www.linkedin.com/in/pauline-makoma"> <img src={('https://tse3.mm.bing.net/th?id=OIP.0qPv4hPOWTK-6uxvDKH9-gHaC1&pid=15.1&P=0&w=470&h=180')} /> </a>
                </div>

                <div className="linksto">
                    <h4>Nicole Cedano</h4>
                    <a href="https://github.com/nicole-cedano"> <img src={('https://tse3.mm.bing.net/th?id=OIP._x0yLaog2BHZg-Se56CkowHaHa&pid=15.1&P=0&w=300&h=300')} /></a>
                    <a href="https://www.linkedin.com/in/nicolecedano/"> <img src={('https://tse3.mm.bing.net/th?id=OIP.0qPv4hPOWTK-6uxvDKH9-gHaC1&pid=15.1&P=0&w=470&h=180')} /> </a>
                </div>

                <div className="linksto">
                    <h4>Jean Mizero</h4>
                    <a href="https://github.com/jeanmizero"> <img src={('https://tse3.mm.bing.net/th?id=OIP._x0yLaog2BHZg-Se56CkowHaHa&pid=15.1&P=0&w=300&h=300')} /></a>
                    <a href="https://www.linkedin.com/in/jean-mizero"> <img src={('https://tse3.mm.bing.net/th?id=OIP.0qPv4hPOWTK-6uxvDKH9-gHaC1&pid=15.1&P=0&w=470&h=180')} /> </a>
                </div>
            </div>
        </div>
    )
}

export default Contact