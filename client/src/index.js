import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import { BrowserRouter } from 'react-router-dom'
import ParkingProvider from './context/ParkingProvider.js';



ReactDOM.render(
    <BrowserRouter>
        <ParkingProvider>
            <App />
        </ParkingProvider>
    </BrowserRouter>, document.getElementById('root'))


