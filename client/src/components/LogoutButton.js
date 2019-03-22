import React from "react"
import { withUsers }  from "../context/userProvider.js"


const LogoutButton = props => {
    return (
        <div>
        <button onClick={props.handleLogout} className="logout-button">Logout</button>
        </div>
    )
}

export default withUsers(LogoutButton)