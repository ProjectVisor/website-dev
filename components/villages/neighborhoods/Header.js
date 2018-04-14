import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import Nav from './blocks/houses/Nav.js';
import CallToAction from './blocks/Call To Action.js';
import LandingHero from './blocks/LandingHero.js';

class Header extends React.Component {
  render() {
    return (
      <header className="masthead">
        <Nav/>
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-4">
              <div className="header-content mx-auto">
                <h1 className="mb-5">The Future of Privacy, Security and Free Ultra-Fast Transactions.</h1>
                <a href="#features" className="btn btn-outline btn-xl js-scroll-trigger pulse">
                  <span className="align-middle">Learn more about Visor </span>
                  <i className="fa fa-angle-down fa-2x align-middle" />
                </a>
              </div>
            </div>
            <div className="col-lg-8 my-auto">
              <img src="img/visor-isometric.svg" className="levitate" alt="" />
            </div>
          </div>
        </div>
      </header>
    )
  }
}

module.exports = Header;