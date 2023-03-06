import React, { Component } from 'react'
import './css/Navbar.css'
import { Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar  navbar-expand-lg bg-body-tertiary ">
          <div className="container-fluid ">
            <a className="navbar-brand" href="/">NewsPalace</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categories

                  </a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/general">general</Link></li>
                    <li><Link className="dropdown-item" to="/sports">sports</Link></li>
                    <li><Link className="dropdown-item" to="/technology">techonology</Link></li>
                    <li><Link className="dropdown-item" to="/business">business</Link></li>
                    <li><Link className="dropdown-item" to="/entertainment">entertainment</Link></li>
                    <li><Link className="dropdown-item" to="/health">health</Link></li>
                   
                    
                    <div className="dropdown-divider"></div>
                    <li><Link className="dropdown-item" to="/">Home</Link></li>
                    
                  </ul>
                </li>
                
              </ul>
              
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar