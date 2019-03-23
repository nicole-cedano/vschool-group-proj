import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import { BrowserRouter } from 'react-router-dom'
import ParkingProvider from './context/ParkingProvider.js'
import './style.css'
import UserProvider from './context/userProvider.js'



ReactDOM.render(
    <BrowserRouter>
        <UserProvider>
            <ParkingProvider>
                <App />
            </ParkingProvider>
        </UserProvider>
    </BrowserRouter>,
    document.getElementById('root'))


