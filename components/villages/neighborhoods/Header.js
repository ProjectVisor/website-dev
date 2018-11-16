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
                <h1 className="mb-5">Welcome to RAYS Network, the Second Generation of Ethereum.
                </h1>

                <a href="https://docs.google.com/forms/d/e/1FAIpQLScKXICCg9GhShzXwliAVxhxkwJ2n3Ch3ozqcXmdDfgBnnGl4g/viewform" className="btn btn-outline btn-x2 getwhitlisted-btn">
                  <span className="align-middle"> &nbsp;&nbsp;&nbsp;&nbsp; BUY RAYS &nbsp;&nbsp;&nbsp;&nbsp;</span>
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
