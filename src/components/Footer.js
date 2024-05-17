import React, { Component } from 'react'

export class Footer extends Component {


  render() {
    const currentYear = new Date().getFullYear();
    return (
      <>
        <footer className="footer bg-dark text-light py-3">
            <div className="container text-center">
            <span>&copy; {currentYear} Shiv Yelave</span>
            </div>
        </footer>
      </>
    )
  }
}

export default Footer
