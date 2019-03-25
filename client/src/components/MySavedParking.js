import React from "react"
import {withUsers} from '../context/userProvider.js'
import LogoutButton from './LogoutButton.js'


const MySavedParking = (props) => {

    const { userName, handleLogout } = props
    return (

        <div>
            Logged-in as:<h3 style={{ color: "blue" }}> {userName}</h3>
            <LogoutButton handleLogout={handleLogout} />
        </div>
    )


}

export default withUsers(MySavedParking)