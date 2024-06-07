import React from 'react'
import { Link } from 'react-router-dom'

  function Landingscreen() {
  return (
    <div class='row landing'>
        <div className='col-md-12 text-center'>
            <h2 style={{color:'white',fontSize:'120px '}}>sherINNrooms</h2>
            <h1 className='landingh'>There is no place like home.shereINNwelcome</h1>
            <Link to='/home'>
            <button className='landingbtn' style={{color:'orange',backgroundColor:'white'}}>Get started</button>
            </Link>
        </div>
        </div>
  )
}
export default Landingscreen;

