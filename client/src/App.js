import React, { Component } from 'react'
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import AboutUs from './components/AboutUs.js'
import Parkings from './components/Parkings.js'
import { withRouter, Route, Switch } from 'react-router-dom'
import { withUsers } from './context/userProvider.js'
import MySavedParking from './components/MySavedParking.js';



class App extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            navToggle: true,

        }
    }


    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => this.props.getUsernameInput(this.state.username))
    }

    handleSubmit = e => {
        e.preventDefault()
        const newUser = {
            username: this.state.username
        }
        this.props.addUser(newUser)
        this.setState({ username: "" })
    }

    navToggler = () => this.setState(prevState => ({ navToggle: !prevState.navToggle }))


    render() {

        return (
            <div>
                <Navbar navToggle={this.state.navToggle} navToggler={this.navToggler} />

                <Switch>
                    <Route exact path="/" render={routerProps => <Home {...routerProps}
                        {...this.state}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        username={this.state.username} />} />
                    <Route path="/mysavedparking" component={MySavedParking} />
                    <Route path="/AboutUs" component={AboutUs} />
                    <Route path="/findparking" render={routerProps => <Parkings {...routerProps}
                        username={this.state.username} />} />

                </Switch>

            </div>
        )
    }
}

export default withRouter((withUsers(App)))

