import React from 'react'
import Parking from './Parking.js'

const ParkingList = props => {


    return (
        <div className="parking-list">
            {props.locations.map(location => 
                <Parking 
                    key={location.id}
                    {...location}/>)
                }
        </div>
    )
}

export default ParkingList
