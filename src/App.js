import React, { Component } from 'react';
import '../assets/styles/App.css';
import NavLink from './components/helpers/NavLink';
import { IndexLink } from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Web Map</h1>
        <nav role="navigation">
          <ul>
            <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
            <li><NavLink to="/logged">Logged</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <br/>
            {this.props.children}
          </ul>
        </nav>
      </div>
    );
  }
}

export default App;
