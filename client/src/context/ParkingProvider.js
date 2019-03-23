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
                    addSavedParking: this.addSavedParking
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

export default withUsers(ParkingProvider)