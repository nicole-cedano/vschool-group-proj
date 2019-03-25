import React, { Component } from 'react'
import axios from 'axios'
import {withUsers} from "./userProvider.js"
const ParkingContext = React.createContext()

class ParkingProvider extends Component {
    constructor() {
        super()
        this.state = {
            lat: "",
            long: "",
            locationErr: "",
            locations: [],
            mySavedLocations: [],
        }
    }

    // getting a users geolocation using the navigator

        getUserPosition = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
            
                    this.setState({
                        long: position.coords.longitude,
                        lat: position.coords.latitude,
                    })
                })
            } else {
                this.setState({
                    locationErr: "Please enable location servcies on your browser to use ParkingU."
                })
            }
        }
// using HERE MAPS api to receive data 
    getParking = () => {
        axios.get(`https://places.cit.api.here.com/places/v1/discover/search?at=${this.state.lat},${this.state.long}&q=parking&size=15&tf=plain&show_refs=pvid&app_id=0hVu5uHr1pDgby7ibUB9&app_code=ivy0VpjGLDE3sTiqoQaUfg`).then(response => {
            console.log(response)
            this.setState({
                locations: response.data.results.items
            })
        })
            .catch(err => console.log(err))
    }



    // adding a saved parking locations to our user database 
    addSavedParking = newLocation => {
        axios.post(`/parking-locations/${this.props.usersID}`, newLocation).then(response => {
            this.setState(prevState => ({
                mySavedLocations: [...prevState.mySavedLocations, response.data]
            }))
        })
            .catch(err => console.log(err))
    }

    handleSaveParking = id => {
        const newLocation = this.state.locations.find( location => location.id === id)
        for(let key in newLocation){
            if(key !== "title" && key !== "vicinity" &&  key !== "id"){
                delete newLocation[key]
            }
        }
        this.addSavedParking(newLocation)
    }
    getSavedParking =usersID =>{
        axios.get(`/parking-locations/user/${this.props.usersID}`).then(response =>{
            this.setState({
                mySavedLocations: response.data
            })
        })
        .catch (err => console.log(err))
    }
    // user will be able to delete a saved location with handle delete 
    handleDelete = _id => {
        axios.delete(`/parking-locations/${_id}`).then(response => {
            alert(response.data)
            this.setState(prevState => ({
                mySavedLocations: prevState.mySavedLocations.filter(location => location._id !==  _id)
            }))
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <ParkingContext.Provider
                value={{
                    lat: this.state.lat,
                    long: this.state.long,
                    locationErr: this.state.locationErr,
                    getUserPosition: this.getUserPosition,
                    getParking: this.getParking,
                    locations: this.state.locations,
                    mySavedLocations: this.state.mySavedLocations,
                    handleSaveParking: this.handleSaveParking,
                    addSavedParking: this.addSavedParking,
                    getSavedParking:this.getSavedParking,
                    handleDelete: this.handleDelete
                }}>
                {this.props.children}
            </ParkingContext.Provider>
        )
    }
}



export const withParking = C => props => (
    <ParkingContext.Consumer>
        {value => <C {...props} {...value} />}
    </ParkingContext.Consumer>
)

// wrapping with user context to be able to make requests to our own DB
export default withUsers(ParkingProvider)