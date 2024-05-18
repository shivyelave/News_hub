import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavbarOpen: false
    };
  }

  toggleNavbar = () => {
    this.setState(prevState => ({
      isNavbarOpen: !prevState.isNavbarOpen
    }));
  }

  render() {
    const { isNavbarOpen } = this.state;
    const navbarClass = isNavbarOpen ? "collapse navbar-collapse show" : "collapse navbar-collapse";

    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top mb-3" data-bs-theme="dark">
          <div className="container-fluid">
            <a className="navbar-brand" href='/'>News Hub</a>
            <button className="navbar-toggler" type="button" onClick={this.toggleNavbar} aria-expanded={isNavbarOpen ? "true" : "false"} aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={navbarClass} id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item" onClick={this.toggleNavbar}>
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item" onClick={this.toggleNavbar}>
                  <Link className="nav-link active" aria-current="page" to="/business">Business</Link>
                </li>
                <li className="nav-item" onClick={this.toggleNavbar}>
                  <Link className="nav-link active" aria-current="page" to="/science">Science</Link>
                </li>
                <li className="nav-item" onClick={this.toggleNavbar}>
                  <Link className="nav-link active" aria-current="page" to="/sports">Sports</Link>
                </li>
                <li className="nav-item" onClick={this.toggleNavbar}>
                  <Link className="nav-link active" aria-current="page" to="/technology">Technology</Link>
                </li>
                <li className="nav-item" onClick={this.toggleNavbar}>
                  <Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item" onClick={this.toggleNavbar}>
                  <Link className="nav-link active" aria-current="page" to="/health">Health</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
