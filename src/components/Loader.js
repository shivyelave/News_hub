import React, { Component } from 'react'

export class Loader extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center align-items-center' style={{ minHeight: '60vh' }}>
        <img src='Book.gif' alt='Loading...'/>
      </div>
    )
  }
}

export default Loader