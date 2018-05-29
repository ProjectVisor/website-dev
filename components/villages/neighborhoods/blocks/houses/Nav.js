import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">RAYS</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa fa-align-right" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#features">About RAYS</a>
              </li>

              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#road-map">Road Map</a>
              </li>

              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#buyRays">Buy RAYS</a>
              </li>

              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#whitepaper">Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#wallet">3S Wallet</a>
              </li>

              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#visorEnterprise">Referral</a>
              </li>

              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#social">Sign Up/Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

module.exports = Nav;
