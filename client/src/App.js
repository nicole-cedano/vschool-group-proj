import React, { Component } from 'react'
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import AboutUs from './components/AboutUs.js'
import Parkings from './components/Parkings.js'
import {withRouter, Route, Switch } from 'react-router-dom'
import { withUsers } from './context/userProvider.js'



class App extends Component {
    constructor() {
        super()
        this.state = {
            userName: "",
            navToggle: true,
           
        }
    }

    componentDidMount = () => {

    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const newUser = {
            username: this.state.userName
        }
        this.props.addUser(newUser)
        this.setState({userName: ""})
    }

    navToggler = () => this.setState(prevState => ({ navToggle: !prevState.navToggle }))

    
    render() {
        
        return (
            <div>
                <Navbar navToggle={this.state.navToggle} navToggler={this.navToggler}/> 
                
                <Switch>
                    <Route exact path="/" render={routerProps => <Home {...routerProps}
                        {...this.state}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        userName={this.state.userName}   /> } />
                    <Route path="/AboutUs" component={AboutUs}/> 
                    <Route path="/Parkings" render={routerProps => <Parkings {...routerProps} />} />
                </Switch>

            </div>
        )
    }
}

export default  (withUsers(App))

