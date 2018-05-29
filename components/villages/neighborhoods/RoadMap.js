import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import ArticleCover from './blocks/houses/Article Cover.js';
import SectionDescription from './blocks/Section Description.js';

class Features extends React.Component {
    render() {
        return (
            <section className="features" id="road-map">
              <div className="container">
                <div className="section-heading text-center">
                  <h2>Road Map</h2>
                  <p>Discover RAYS Road Map</p>
                  <hr/>
                </div>
                <div className="row">
                  <div className="col-12 my-auto">
                    <div className="container-fluid">

                      <div className="row">
                        <div className="col-lg-12">
                          <div className="feature-item">
                            <i className="fa fa-eye-slash text-primary"/>
                            <h3>Q1 2018</h3>
                            <p>
                              RAYS idea created
                              Initial Team Formulation
                              Creation of Roadmap
                              Official social medias & official email
                              Github for RAYS Project developers
                              Research and Study of Existing Blockchain Protocols and Algorithms
                              Understanding the needs of customers
                              Team Discussion and Decisions for Solutions to ensure the requirements of Community
                              Pre-Whitepaper Preparation
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-12">
                          <div className="feature-item">
                            <i className="fa fa-eye-slash text-primary"/>
                            <h3>Q2 2018</h3>
                            <p>
                              Website Launch
                              RAYS Enterprise Registration
                              RAYS  Roadmap
                              Pre-launch marketing strategy and materials
                              Research regulations and compliance procedures
                              RAYS Enterprise and Digital ID Core Preparation
                              RAYS 3S Wallet Discussion
                              Find current projects that will provide valuable functionality  to RAYS Enterprise
                              Pre-whitepaper release
                              Preparation for AI Master Nodes Dev & Quantum Proof
                              Preparation of Digital ID Implementation
                              Understanding Industries and Integration
                              Marketing campaigns launched to increase awareness of RAYS Project
                              Preparation for Private and Pre Sale
                              Team Extension
                              Minimum Viable Product (MVP)
                              ERC20 Smart Contract for  Token Sale
                              Smart Contract Audit

                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-12">
                          <div className="feature-item">
                            <i className="fa fa-eye-slash text-primary"/>
                            <h3>Q3 2018</h3>
                            <p>
                              Private and Pre Sale
                              First whitepaper 1.0 release
                              Preparation for Exchange Listings
                              Preparation for RAYS Cloud Wallet
                              FBN  blockchain development with TOR/I2P integration network
                              Release of Cloud wallet
                              RAYS Partnerships
                              Academic Collaborations and Establishment of RAYS Research Laboratory
                              Preparation of Windows and Linux wallets
                              RAYS Enterprise Relocation
                              Prepare for RAYS Exchange
                              Team Expansion

                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-12">
                          <div className="feature-item">
                            <i className="fa fa-eye-slash text-primary"/>
                            <h3>Q4 2018</h3>
                            <p>
                              First Partnership Announcement
                              Release Windows and Linux Wallets
                              Listing on at least one top rated exchange other than IDEX
                              Listing on https://coinmarketcap.com
                              Preparation for RAYS  Smart Contracts
                              Release RAYS Exchange
                              Whitepaper Update 1.1
                              Release New Roadmap for 2019
                              Preparation for RAYS Mobile App


                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-12">
                          <div className="feature-item">
                            <i className="fa fa-eye-slash text-primary"/>
                            <h3>2019</h3>
                            <p>
                              AI Master nodes
                              Quantum Proof
                              More Exchanges
                              New Partnerships
                              RAYS Flexible Blockchain Network (FBN) Performance and Security Audits
                              RAYS 3S Wallet
                              RAYS Mainnet Deployment
                              And a lot more to come



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

module.exports = Features;
