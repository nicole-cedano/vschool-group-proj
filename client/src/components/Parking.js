import React from 'react'
import { withParking } from '../context/ParkingProvider.js'


const Parking = props => {
    const { title, vicinity, id} = props

    return(
    <div> 
        <div className="parking-card">
            <h3>{title}</h3>
            <p>{vicinity}</p>
            <a href={`https://www.google.com/maps/search/?api=1&query=${title}`}>Directions</a>
            <button onClick={() => props.handleSaveParking(id)} className="heart">♡</button>
        </div>
    </div>
    )
}

export default withParking(Parking)