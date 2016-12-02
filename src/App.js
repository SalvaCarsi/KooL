import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavLink from './components/NavLink';

class App extends Component {
  render() {
    // TODO move the url to config file
    const spotifyValidationUrl = 'https://accounts.spotify.com/authorize?' +
      'client_id=0c1b513f65f54083a4e0fca663fa3693&redirect_uri=http://localhost:3000/&response_type=token';
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>KooL</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <a href={spotifyValidationUrl}>Login with Spotify!</a>
        </div>
        <div>
          <h1>Web Map</h1>
          <nav role="navigation">
            <ul>
              <li><NavLink to="/Logged">Logged</NavLink></li>
              <li><NavLink to="/About">About</NavLink></li>
              <br/>
              {this.props.children}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default App;
