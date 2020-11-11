import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <ul>
        <li><NavLink to="/people">Details</NavLink></li>
        <li><NavLink to="/number">Count</NavLink></li>
      </ul>
    </div>
  )

}
