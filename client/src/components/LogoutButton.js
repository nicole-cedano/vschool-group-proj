import React from "react"
import { withUsers }  from '../context/userProvider.js'


const LogoutButton = props => {
    return (
        <div onClick={props.handleLogout} className="logout-button"> 
        <h3>Logout</h3>
        </div>
    )
}

export default withUsers(LogoutButton)