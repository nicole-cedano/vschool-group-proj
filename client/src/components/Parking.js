import React from 'react'
import { withParking } from '../context/ParkingProvider.js'


const Parking = props => {
    const { title, href, vicinity, id, saveToggler, saveToggle} = props

    return(
    <div> 
        <div className="parking-card">
            <h3>{title}</h3>
            <p>{vicinity}</p>
            <a href={`https://www.google.com/maps/search/?api=1&query=${title}`}>Directions</a>
            <button className={` heart heart-${saveToggle ? "saved" : "unsaved"}`}  onClick={saveToggler}>♡</button>
        </div>
    </div>
    )
}

export default withParking(Parking)