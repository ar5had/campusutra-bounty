import React, { Component } from 'react';

import campus from '../assets/images/university-campus.svg';
import Navbar from '../Navbar';
import './styles.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="upper container">
          <div className="logo blue">
            <img src={campus} />
            Campusutra
          </div>
          <div className="button-wrapper">
            <button className="login black">Log In</button>
            <button className="signup bluebackground">Sign Up</button>
          </div>
        </div>
        <Navbar />
      </div>
    );
  }
}

export default Header;
