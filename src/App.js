import React, { Component } from 'react';
import '../assets/styles/App.css';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Navigation/>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
