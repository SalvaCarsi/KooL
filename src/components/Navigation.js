import React, { Component } from 'react';
import '../../assets/styles/navigation.css';
import NavLink from './helpers/NavLink';
import { IndexLink } from 'react-router';
import logo from '../../assets/images/KooL-logo-100px.png';

class Navigation extends Component {
  render() {
    return (
      <div>
        <img src={logo} alt="logo" className="" />
        <nav role="navigation">
          <ul>
            <li><IndexLink to="/">Main</IndexLink></li>
            <li><NavLink to="/logged">Logged</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <br/>
            {this.props.children}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;