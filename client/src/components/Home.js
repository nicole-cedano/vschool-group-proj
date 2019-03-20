import React from 'react'
import { withUsers } from '../context/userProvider.js'

const Home = (props) => {
    const { handleChange, handleSubmit, userName: { userName } } = props
    return (
        <div>
            <div className="video-overlay"> 
           
                <video className="video-overlay" loop autoPlay >
                    <source src='https://media.istockphoto.com/videos/endless-grid-of-new-cars-drone-shot-video-id908045562' className="video"/>
                </video>
                </div>
            <form onSubmit={handleSubmit}>
                username:  <input
                    type="text"
                    name="userName"
                    value={userName}
                    onChange={handleChange}
                    placeholder="Username"
                />

                <button>sign up</button>
                or
                <button> log in </button>
                if you already have an account
            </form>

        </div>
    )
}

export default withUsers(Home)