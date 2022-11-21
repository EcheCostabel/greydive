import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {


  return (
    <div className='home'>
        
        <Link className='linkk' to='/test/viamo'><h3>Viamo Testing</h3></Link>
        <Link className='linkk' to='/test/nebula'><h3>Nebula Testing</h3></Link>
    </div>
  )
}

export default Home