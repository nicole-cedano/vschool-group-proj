import React, { Component } from 'react'
import axios from 'axios'
const ParkingContext = React.createContext()

class ParkingProvider extends Component {
    constructor() {
        super()
        this.state = {
            lat: "",
            long: "",
            locationErr: "",
            locations: []
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
        return axios.get(`https://places.cit.api.here.com/places/v1/discover/search?at=${this.state.lat},${this.state.long}&q=parking&size=15&tf=plain&show_refs=pvid&app_id=0hVu5uHr1pDgby7ibUB9&app_code=ivy0VpjGLDE3sTiqoQaUfg`).then(response => {
            console.log(response)
            this.setState({
                locations: response.data.results.items
            })
        })
            .catch(err => console.log(err))
    }

    ///// the axios request will be here. 

    render() {
        return (
            <ParkingContext.Provider
                value={{
                    lat: this.state.lat,
                    long: this.state.long,
                    locationErr: this.state.locationErr,
                    getUserPosition: this.getUserPosition,
                    getParking: this.getParking,
                    locations: this.state.locations
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

export default (ParkingProvider)