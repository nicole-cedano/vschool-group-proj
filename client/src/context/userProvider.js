import React , { Component } from 'react'
import axios from "axios"

const UserContext = React.createContext()

class UserProvider extends Component {
    constructor(){
        super()
        this.state = {
            users: []
            
        }

    }


    addUser = newUser => {
        axios.post("/user", newUser).then(response => {
            this.setState(prevState => ({
                users: [...prevState.users, response.data]
            }))
        })
    }



    render(){
        return (
            <UserContext.Provider 
            value ={{
                users: this.state.users,
                addUser: this.addUser
            }}>

                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export default UserProvider

export const withUsers = C => props => (
    <UserContext.Consumer>
        {value => <C {...props} {...value}/>}
    </UserContext.Consumer>
)