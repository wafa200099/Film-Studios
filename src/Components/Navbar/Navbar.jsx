import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="nav-link" to="#">Noxe</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="Home">HOME</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="Movies">Movies</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="TvShows">TvShows</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="People">People</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="About">About</Link>
          </li>
        </ul>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="Login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="Register">Register</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="Logout">Logout</Link>
          </li>
        </ul>
      </div>
    </nav>

  )
}

export default Navbar