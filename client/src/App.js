import React, {Component} from 'react'
import Home from './components/Home.js'
import './style.css'


class App extends Component {
    constructor(){
        super()
        this.state = {
            userName: "",
        }
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

    render(){
    return  (
        <div>
            <Home 
            handleChange={this.handlechange} 
            handleSubmit={this.handleSubmit}
            userName={this.state.userName}
          
             /> 
        </div>
    )
    }
}

export default App


