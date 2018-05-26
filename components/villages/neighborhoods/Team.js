import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import ArticleCover from './blocks/houses/Article Cover.js';
import SectionDescription from './blocks/Section Description.js';

class Team extends React.Component {
  render() {
    return (
      <section className="features" id="team">
        <div className="container">
          <div className="section-heading text-center">
            <h2>Rays Team</h2>
            <p className="text-muted">Meet the core Rays team.</p>
            <hr/>
          </div>
          <div className="row">
            <div className="col-12 my-auto">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="feature-item">
                      <i className="fa fa-user-circle fa-4x text-primary"/>
                      <h3><b>Tomek</b>,<br/>Co-Founder,<br/>Chief Executive Officer</h3>
                      <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum ut libero sed pretium.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="feature-item">
                      <i className="fa fa-user-circle fa-4x text-primary"/>
                      <h3><b>AIFred</b>,<br/>Co-Founder,<br/>Chief Technical Officer</h3>
                      <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum ut libero sed pretium.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="feature-item">
                      <i className="fa fa-user-circle fa-4x text-primary"/>
                      <h3><b>KC</b>,<br/>Co-Founder,<br/>Chief Creative Officer</h3>
                      <p className="text-muted">
                        With 9 years of experience as a UI/UX Engineer and Designer for large companies such as; Emirates,
                        Chelsea FC, Vodafone, Bosch, SEGA and many more - KC has thoroughly harnessed his craft. From
                        Front-End code, to visual communications - KC accepts the responsibilities required as Rays's
                        creative director and truly executes them with passion and to the highest possible standard.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="feature-item">
                      <i className="fa fa-user-circle fa-4x text-primary"/>
                      <h3><b>Umar Gill</b>,<br/>Chief Marketing Officer</h3>
                      <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum ut libero sed pretium.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="feature-item">
                      <i className="fa fa-user-circle fa-4x text-primary"/>
                      <h3><b>RommelPL</b>,<br/>Project Adviser,<br/>Legal Expert</h3>
                      <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum ut libero sed pretium.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="feature-item">
                      <i className="fa fa-user-circle fa-4x text-primary"/>
                      <h3><b>Don Phillips</b>,<br/>Project Adviser</h3>
                      <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum ut libero sed pretium.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="feature-item">
                      <i className="fa fa-user-circle fa-4x text-primary"/>
                      <h3><b>Monty</b>,<br/>Blockchain Developer</h3>
                      <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum ut libero sed pretium.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="feature-item">
                      <i className="fa fa-user-circle fa-4x text-primary"/>
                      <h3><b>Hassan</b>,<br/>Developer</h3>
                      <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum ut libero sed pretium.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="feature-item">
                      <i className="fa fa-user-circle fa-4x text-primary"/>
                      <h3><b>Nadeem</b>,<br/>Developer</h3>
                      <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum ut libero sed pretium.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
	  )
  }
}

module.exports = Team;
