import React, { Component } from "react"
import { withParking } from "../context/ParkingProvider.js"
import LogoutButton from './LogoutButton.js'



class MySavedParking extends Component {
    constructor() {
        super()
    }
    componentDidMount() {
        this.props.getSavedParking()
    }
    render() {
        return (
            <div>
                <LogoutButton />

            </div>
        )
    }

}


export default withParking(MySavedParking)