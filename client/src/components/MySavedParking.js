import React, { Component } from "react"
import { withParking } from "../context/ParkingProvider.js"
import SavedParkingList from "./SavedParkingList.js"
import LogoutButton from './LogoutButton.js'
import { withUsers } from "../context/userProvider.js"



class MySavedParking extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        this.props.getSavedParking()
    }
    render() {
        console.log(this.props.mySavedLocations)
        return (
            <div>
                Logged-in as:<h3 style={{ color: "lightBlue" }}> {this.props.userName}</h3>
                <LogoutButton handleLogout={this.props.handleLogout} />
                {this.props.mySavedLocations ? <SavedParkingList
                    mySavedLocations={this.props.mySavedLocations} /> : null}
            </div >
        )
    }
}


export default withUsers(withParking(MySavedParking))
