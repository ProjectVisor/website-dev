import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">Rays</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa fa-align-right" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#features">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#visorPay">VisorPay</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#visorEnterprise">Rays Enterprise</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#whitepaper">Whitepaper</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#team">Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#exchanges">Exchanges</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#social">Social</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

module.exports = Nav;
