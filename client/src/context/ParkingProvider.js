import React, {Component} from 'react'
// import axios from 'axios'

const ParkingContext = React.createContext()

class ParkingProvider extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

///// the axios request will be here. 

    render(){
        return(
            <ParkingContext.Provider>
                {this.props.children}
            </ParkingContext.Provider>
        )
    }
}



export const withParking = C => props => (
    <ParkingContext.Consumer>
        {value => <C {...props} {...value}/>}
    </ParkingContext.Consumer>
)

export default ParkingProvider