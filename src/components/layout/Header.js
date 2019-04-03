import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Header extends Component {

  handleLogout = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/logout',{
      mode: 'cors', 
      credentials: 'include',
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      }
    })
  }

  render(){
    return (
      <header style={headerStyle}>
        <h1 style={headerText}>Next Game</h1>
        <button type="button" onClick ={this.handleLogout}className="btn btn-danger">Logout!</button>
        <Link style={linkStyle} to="/">Landing Page</Link> | 
        <Link style={linkStyle} to="/preferences">Preferences</Link> | 
        <Link style={linkStyle} to="/nextgames"> Next Games </Link> |
        <Link style={linkStyle} to="/mygames"> MyGames </Link> |
        <Link style={linkStyle} to="/signup"> Sign Up</Link> |
        <Link style={linkStyle} to="/login"> Log In </Link>
      </header>
    )
  }
}

const headerStyle ={
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '1.2rem',
  border: "2px solid #222",
  margin: "0.5rem",
  overflow: "hidden"
}

const headerText = {
  margin: "0 0 1rem 0"
}

const linkStyle = {
  color: '#fff',
  textDecoration: "none",
  border: "1px solid #fff",
  padding: "0.3rem 0.5rem",
  borderRadius: "25px",
  margin: "0 0.5rem"
}


export default Header;