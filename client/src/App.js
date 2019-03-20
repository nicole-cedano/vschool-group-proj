import React, { Component } from 'react'
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import AboutUs from './components/AboutUs.js'
import Parkings from './components/Parkings.js'
import { withParking } from './context/ParkingProvider.js'
import { withRouter, Route, Switch } from 'react-router-dom'




class App extends Component {
    constructor() {
        super()
        this.state = {
            userName: "",
            url: 'https://media.istockphoto.com/videos/endless-grid-of-new-cars-drone-shot-video-id908045562'
        }
    }

    componentDidMount = () => {
        /// the axios request will go here
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventdefault()
        const newUser= {
            userName: this.state.userName
        }
        this.props.addUser(newUser)
        this.setState({userName: ""})

    }

    render() {
        return (
            <div>
                <Navbar /> 
                
                <Switch>
                    <Route exact path="/" render={routerProps => <Home {...routerProps}
                        handleChange={this.handlechange}
                        handleSubmit={this.handleSubmit}
                        userName={this.state.userName}   /> } />
                    <Route path="/AboutUs" component={AboutUs}/> 
                    <Route path="/Parkings" render={routerProps => <Parkings {...routerProps} />} />
                </Switch>

            </div>
        )
    }
}

export default withRouter(withParking(App))


