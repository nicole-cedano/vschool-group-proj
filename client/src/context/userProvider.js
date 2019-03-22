import React, { Component } from 'react'
import axios from "axios"
import { withRouter } from 'react-router-dom'
const UserContext = React.createContext()

class UserProvider extends Component { 
    constructor() {
        super()
        this.state = {
            usersID: ""
        }

    }

    addUser = newUser => {
        axios.post("/user", newUser).then(response => {
            this.setState({
                usersID: response.data._id
            })
        }, () => this.props.history.push("/Parkings"))
    }

    getUser = () => {
        axios.get(`/user/${this.state.usersID}`).then(response => {
            console.log(response.data)
            this.setState({
                usersID: response.data._id
            })
        })
        .catch(err => console.log(err))

    }




    render() {
        console.log(this.props)
        return (
            <UserContext.Provider
                value={{
                    users: this.state.user,
                    addUser: this.addUser,
                    getUser: this.getUser
                }}>

                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export default withRouter(UserProvider)

export const withUsers = C => props => (
    <UserContext.Consumer>
        {value => <C {...props} {...value} />}
    </UserContext.Consumer>
)