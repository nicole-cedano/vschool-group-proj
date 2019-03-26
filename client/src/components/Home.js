import React, {Component} from 'react'
import { withUsers } from '../context/userProvider.js'
import Toggle from '../shared/Toggle.js'


class Home extends Component { 
    constructor(){
        super()
        this.state ={

        }
    }

    render(){
    const { handleChange, handleSubmit, username} = this.props
    
    return (
        <div className ="main-home-div">
            <video className="video-overlay" autoPlay loop>
                <source className="video" src='https://media.istockphoto.com/videos/endless-grid-of-new-cars-drone-shot-video-id908045562' />
            </video>
            <div className="logo">
                <h2>ParkU</h2>
                <p>
                    Welcome to Park U, we are here to help you find available parking spaces near you.
                </p>
            </div>
            <div className="form-container">
                <Toggle render={({ isToggled, toggler }) =>
                    <>
                        {!isToggled
                            ? <form className="form" onSubmit={handleSubmit}>
                                <h2>Sign Up</h2> 
                                <input
                                    type="text"
                                    name="username"
                                    value={username}
                                    onChange={handleChange}
                                    placeholder="Username"
                                />
                                <button>Sign up</button>
                                or <span onClick={toggler}> Log In </span>
                              </form>
                            : <form  className="form" onSubmit={this.props.handleLogin}>
                                <h2>Login</h2>
                                <input
                                    type="text"
                                    name="username"
                                    value={username}
                                    onChange={handleChange}
                                    placeholder="Username"
                                />
                                <button>Login</button>
                                <span onClick={toggler}>Back to sign up page</span>
                            </form>
                        }
                    </>
                } />
            </div>
        </div>
    )
    }
}

export default withUsers(Home)
