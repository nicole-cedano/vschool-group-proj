import React from 'react'


const Home = (props) => {
    const {handleChange, handleSubmit, userName} = props
    return(
        <div>
            <form onSubmit={handleSubmit}>
                please provide you name: <input 
                    type="text" 
                    name="userName" value={userName} 
                    onChange={handleChange} 
                    placeholder="User name" />

                <button>sign up</button>
            </form>

            <h4> </h4>
        </div>
    )
}

export default Home 