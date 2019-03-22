import React from 'react'
import {withUsers} from '../context/userProvider.js'


const Home = (props) => {
    const {handleChange, handleSubmit, userName: {userName} } = props

    return(
        <div>
            <form onSubmit={handleSubmit}>
                username:  <input 
                    type="text" 
                    name="userName"
                    value={userName} 
                    onChange={handleChange} 
                    placeholder="Username" 
                    />

                <button>sign up</button>
            </form>

        </div>
    )
}

export default  withUsers(Home )