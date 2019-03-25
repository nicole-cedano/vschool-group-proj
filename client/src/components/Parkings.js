import React, { Component } from 'react'
import { withParking } from '../context/ParkingProvider.js'
import { withUsers } from '../context/userProvider.js'
import ParkingList from './ParkingList.js'
import Spinner from './Spinner.js'

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
                
                <button onClick={this.props.getParking} className="find-button">FIND PARKING NEAR ME</button>
                {/* adding a ternary b/c locations are only loading sometimes */}
                {this.props.locations ? <ParkingList
                    locations={this.props.locations} /> : <Spinner />}
            </div>
        )
    }
}

export default withUsers(withParking(Parkings))