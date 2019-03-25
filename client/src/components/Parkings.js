import React, { Component } from 'react'
import { withParking } from '../context/ParkingProvider.js'
import { withUsers } from '../context/userProvider.js'
import ParkingList from './ParkingList.js'
import Spinner from './Spinner.js'
import LogoutButton from './LogoutButton.js'

class Parkings extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true,
            

        }
    }
    componentDidMount() {
        this.props.getUserPosition()
        this.setState({isLoading: false})
    }

    render() {
        const {navToggle, navToggler} = this.props
        return (
            <div>
                <LogoutButton handleLogout={this.props.handleLogout} />
                <h3>Hello, {this.props.username}</h3> 
                <button onClick={this.props.getParking} className="find-button">FIND PARKING NEAR ME</button>      
                {/* adding a ternary b/c locations are only loading sometimes */}
                {this.props.locations ? <ParkingList 
                locations={this.props.locations}/> : null}
            </div>
        )
    }
}

export default withUsers(withParking(Parkings))