import React from 'react'
import { withUsers } from '../context/userProvider.js'
import Toggle from '../shared/Toggle.js'


const Home = (props) => {
    const { handleChange, handleSubmit, userName: { userName } } = props
    return (
        <div>
            {/* <img src={("https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60")} /> */}
            <video className="video-overlay" loop autoPlay >
                <source src='https://media.istockphoto.com/videos/endless-grid-of-new-cars-drone-shot-video-id908045562' />
            </video>
            <div className="logo">
                <h2>ParkU</h2>
                <p>
                    Welcome to Park U, we are here to help you find available parking spaces near you.
                </p>
            </div>
            <div className="auth-form-container">
                <Toggle render={({ isToggled, toggler }) =>
                    <>
                        {!isToggled
                            ? <form className="form" onSubmit={handleSubmit}>
                                <h2>Sign Up</h2>
                                <input
                                    type="text"
                                    name="userName"
                                    value={userName}
                                    onChange={handleChange}
                                    placeholder="Username"
                                />
                                <button>Sign up</button>
                                <p onClick={toggler}>{!isToggled ? "Login" : "sign"} </p>
                              </form>
                            : <form  className="login-form" onSubmit={props.handleLogin}>
                                <h2>Login</h2>
                                <input
                                    type="text"
                                    name="userName"
                                    value={userName}
                                    onChange={handleChange}
                                    placeholder="Username"
                                />
                                <button>Login</button>
                                <span onClick={toggler}>Sign Up</span>
                            </form>
                          
                        }
                    </>
                } />
            </div>
        </div>
    )
}

export default withUsers(Home)
