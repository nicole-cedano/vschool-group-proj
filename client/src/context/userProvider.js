import React, { Component } from 'react'
import axios from "axios"
import { withRouter } from 'react-router-dom'
const UserContext = React.createContext()

class UserProvider extends Component {
    constructor() {
        super()
        this.state = {
            usersID: localStorage.getItem("usersID") || "",
            username: localStorage.getItem("username") || ""
        }

    }
    getUsernameInput = (username) => {
        this.setState({username: username})
    }
    addUser = newUser => {
        axios.post("/user", newUser).then(response => {
            localStorage.setItem("usersID", response.data._id)
            console.log(response.data)
            this.setState({
                usersID: response.data._id
            })
        }, () => this.props.history.push("/findparking"))
    }

    getUser = oldUser => {
        console.log(this.state.userName)
        axios.get(`/user/${this.state.username}`).then(response => {
            console.log(response.data)
            localStorage.setItem("usersID", response.data._id)
            localStorage.setItem("username", response.data.username)
            this.setState({
                usersID: response.data._id,
                username: response.data.username
            })
        })
            .catch(err => console.log(err))

    }

    // taking user back to home page if they want to log out and removing their information 
    handleLogout = () => {
        localStorage.removeItem("usersID")
        localStorage.removeItem("username")
        this.setState({
            usersID: ""
        },
            () => this.props.history.push("/"))
    }

    // logging in user if theyve already made an account
    handleLogin = e => {
        e.preventDefault()
        const oldUser = {
            username: this.state.username
        }
        this.getUser(oldUser)
        this.setState({username: ""},
        () => this.props.history.push("/mysavedparking")
        )
    }





    render() {
        return (
            <UserContext.Provider
                value={{
                    users: this.state.user,
                    addUser: this.addUser,
                    getUser: this.getUser,
                    handleLogout: this.handleLogout,
                    handleLogin: this.handleLogin,
                    getUsernameInput: this.getUsernameInput,
                    username: this.state.username,
                    usersID: this.state.usersID
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