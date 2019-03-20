import React from 'react'


const Home = (props) => {
    const {handleChange, handleSubmit, userName: {userName} } = props
    return(
        <div>
            <form onSubmit={handleSubmit}>
                username: <input 
                    type="text" 
                    name="userName" value={userName} 
                    onChange={handleChange} 
                    placeholder="User name" />

                <button>sign up</button>
                or
                <button>log in</button>
                if you already have an account
            </form>

            <h4> </h4>
        </div>
    )
}

export default Home 