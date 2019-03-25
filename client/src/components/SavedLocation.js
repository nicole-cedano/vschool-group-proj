import React from "react"
import {withParking} from "../context/ParkingProvider.js"

const SavedLocation = props =>{
  const {title,vicinity, _id} = props
  return(
    <div className ="parking-card ">
    <h3>{title}</h3>
    <p>{vicinity}</p>
    <a href ={`https://www.google.com/maps/search/?api=1&query=${title}`}>Directions</a>
    <button onClick = {() => props.handleDelete(_id)} className='delete-button'>Delete</button>

    </div>
  )
}
export default withParking(SavedLocation)