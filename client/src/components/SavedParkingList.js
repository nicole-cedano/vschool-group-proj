import React from "react"
import SavedLocation from "./SavedLocation"

const SavedParkingList = props => {
   return(
     <div className = "parking-list">
     {props.mySavedLocations.map(location =>
     <SavedLocation
      key ={location._id}
      {...location}/>
      )}
     </div>
   )
}

export default SavedParkingList