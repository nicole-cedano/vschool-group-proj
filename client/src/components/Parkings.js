import React, {Component} from 'react'
import {withParking} from '../context/ParkingProvider.js'
import {withUsers} from '../context/userProvider.js'
import ParkingList from './ParkingList.js'

class Parkings extends Component {
    constructor(){
        super()
        this.state = {

        }
    }
    componentDidMount() {
        this.props.getUserPosition()
        this.props.getUser()
    }


    render (){
        console.log(this.props.locations)
        return (
            <div>
                <button onClick={this.props.getParking}>FIND PARKING NEAR ME</button>    
                {/* adding a ternary b/c locations are only loading sometimes */}
                {this.props.locations ? <ParkingList 
                locations={this.props.locations}/> : null}
                
            </div>
        )
    }
}

export default withUsers(withParking(Parkings))