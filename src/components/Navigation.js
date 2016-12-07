import React, { Component } from 'react';
import '../../assets/styles/App.css';
import '../../assets/styles/navigation.css';
import NavLink from './helpers/NavLink';
import { IndexLink } from 'react-router';

class Navigation extends Component {
  render() {
    return (
      <div>
        <nav role="navigation">
          <ul>
            <li><IndexLink to="/">KooL Logo</IndexLink></li>
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