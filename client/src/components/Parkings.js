import React, {Component} from 'react'
import {withParking} from '../context/ParkingProvider.js'


class Parkings extends Component {
    constructor(){
        super()
        this.state = {

        }
    }
    render (){
        return (
            <div>

            </div>
        )
    }
}

export default withParking(Parkings)