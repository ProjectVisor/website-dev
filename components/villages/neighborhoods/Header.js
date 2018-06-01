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
            <div className="col-lg-5">
              <div className="header-content mx-auto">
                <h1 className="mb-5">Welcome to RAYS Network, A New Cryptocurrency and a Blockchain -  “Earn Free RAYS of Worth 100$ Now”.
                </h1>
                <a href="#visorEnterprise" className="btn btn-outline btn-xl js-scroll-trigger pulse">
                  <span className="align-middle">Join Referral Program</span>
                  <i className="fa fa-angle-down fa-2x align-middle" />
                </a>
              </div>
            </div>
            <div className="col-lg-7 my-auto">
              <img src="img/visor-isometric.svg" className="levitate" alt="" />
            </div>
          </div>
        </div>
      </header>
    )
  }
}

module.exports = Header;
