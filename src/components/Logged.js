import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
        <div>You are logged in!
          <ul>
            <li><Link to="/logged/reactjs/react-router">React Router</Link></li>
            <li><Link to="/logged/facebook/react">React</Link></li>
          </ul>
        </div>
      )
  }
})