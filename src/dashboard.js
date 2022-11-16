import React from 'react'
import { useLocation } from 'react-router-dom'
import './App.css'

function Dashboard() {

  const location = useLocation();
  return (
    <div className='App'>
    <div>Welcome to DashBoard</div>
    <p>You have Succesfully LoggedIn</p>
    <p>{location.state.name}</p>
    <p>{location.state.password}</p>

    </div>
  )
}

export default Dashboard