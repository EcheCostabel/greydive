import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import './Home.css'


const Test = () => {
  return (
    <div className='test'>
        <Link className='linkk' to='/viamo'><h3>Viamo Testing</h3></Link>
        <Link className='linkk' to='/nebula'><h3>Nebula Testing</h3></Link>
        <Outlet/>
    </div>
    
  )
}

export default Test