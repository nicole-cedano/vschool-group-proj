import React from 'react'
import { withParking } from '../context/ParkingProvider.js'
import Toggle from "../shared/Toggle.js"

const Parking = props => {
    const { title, href, vicinity, id} = props

    return(
    <div> 
        <div className="parking-card">
            <h3>{title}</h3>
            <p>{vicinity}</p>
            <a href={`https://www.google.com/maps/search/?api=1&query=${title}`}>Directions</a>
            {/* <button className={` heart heart-${saveToggle ? "saved" : "unsaved"}`}  onClick={saveToggler}>♡</button> */}
            <Toggle render={({toggler, isToggled}) => 
            <button onClick={() => props.handleSaveParking(id)} 
            onClick={toggler}
            className={`heart heart-${!isToggled ? "unsaved" : "saved" }`}>♡</button>
        }/>
        </div>
    </div>
    )
}

export default withParking(Parking)