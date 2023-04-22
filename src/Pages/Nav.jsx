import React from 'react'
import './CSS/style.css'
import {NavLink, Link} from 'react-router-dom'
function Nav() {
  return (
    <div className='container'>
       <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src="img/logo.png" alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/food">Food Item</NavLink>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Feature</a>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="#">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav