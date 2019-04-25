# vschool-group-proj
# Gigger
Nicole Cedano, Pauline Makoma, Jean Mizero

## Objective

Provide a way for users to easily find, save, and delete parking spots near them using our own server, as well as using the places API.

## Links

Github Repository: https://github.com/nicole-cedano/vschool-group-proj

## Technologies Used
* HTML, CSS, JavaScript, React, Axios
* Node, Expess + Middleware, MongoDB, Mongoose

## Code Example

One challenge was saving the API data from places server, to our own. To save that data in our server we used the mapped out parking card in the Parking.js file to save the data with an onClick.  From there we added handleSaveParking, and add saved parking to our ParkingProvider.js located inside the context folder to save that data to our DB.
```
Here is the code for the onClick:
     <div className="parking-card">
            <h3>{title}</h3>
            <p>{vicinity}</p>
            <a href={`https://www.google.com/maps/search/?api=1&query=${title}`}>Directions</a>
            {/* <button className={` heart heart-${saveToggle ? "saved" : "unsaved"}`}  onClick={saveToggler}>♡</button> */}
            <Toggle render={({toggler, isToggled}) => 
            <button onClick={() => props.handleSaveParking(id)}
            className={`heart heart-${!isToggled ? "unsaved" : "saved" }`}>♡</button>
Here is handleSaveParking:
 handleSaveParking = id => {
        const newLocation = this.state.locations.find( location => location.id === id)
        for(let key in newLocation){
            if(key !== "title" && key !== "vicinity" &&  key !== "id"){
                delete newLocation[key]
            }
        }
        this.addSavedParking(newLocation)
    }
Here is addSavedParking :
addSavedParking = newLocation => {
        axios.post(`/parking-locations/${this.props.usersID}`, newLocation).then(response => {
            this.setState(prevState => ({
                mySavedLocations: [...prevState.mySavedLocations, response.data]
            }))
        })
            .catch(err => console.log(err))
    }


```

## Wireframes

Being an actively gigging musician, there is a ton of information that is difficult to keep track of. There have been many times where I have accidentally double booked myself, forgetting that I had already committed to a gig. This makes band leaders super angry. I have been wanting to build an app for a few years now that is a calendar specifically for musicians. In the future I might expand it to all arts-based freelancers. The goal of this app is to provide a more detailed platform for musicians. Event inputs will include info like call time, dress, pay, set-list, and event schedule.

* MVP 
* Full-stack
* Responsive
* Create a search for parking availability
* Save/submit location.
* Nice, simple, layout , easy to navigate


## Future Ideas
* show the prices of the parking spaces/garages
