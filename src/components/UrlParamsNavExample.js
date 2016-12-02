import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>{this.props.params.token}</h2>
      </div>
    )
  }
})