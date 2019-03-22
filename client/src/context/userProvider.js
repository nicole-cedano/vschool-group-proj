import React, { Component } from 'react'
import axios from "axios"
import { withRouter } from 'react-router-dom'
const UserContext = React.createContext()

class UserProvider extends Component {
    constructor() {
        super()
        this.state = {
            usersID: localStorage.getItem("usersID") || "",
            userName: ""
        }

    }
    getUsernameInput = (userName) => {
        this.setState({userName: userName})
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
        axios.get(`/user/${this.state.userName}`).then(response => {
            console.log(response.data)
            this.setState({
                usersID: response.data._id
            })
        })
            .catch(err => console.log(err))

    }

    // taking user back to home page if they want to log out and removing their information 
    handleLogout = () => {
        localStorage.removeItem("usersID")
        this.setState({
            usersID: ""
        },
            () => this.props.history.push("/"))
    }

    // logging in user if theyve already made an account
    handleLogin = e => {
        e.preventDefault()
        const oldUser = {
            username: this.state.userName
        }
        this.getUser(oldUser)
        this.setState({userName: ""},
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
                    userName: this.state.userName
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