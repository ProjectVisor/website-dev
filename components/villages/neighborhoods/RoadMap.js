import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from 'react-grid-system';
import ArticleCover from './blocks/houses/Article Cover.js';
import SectionDescription from './blocks/Section Description.js';
import LazyLoad from 'react-lazyload';
class Features extends React.Component {
    render() {
        return (
            <section className="features" id="road-map">
                <div className="container">
                    <div className="section-heading text-center">
                        <h2>SKYMAP (Road to Sky)</h2>
                        <p>Discover RAYS Road Map</p>
                        <hr/>
                    </div>
                    <div className="row">
                        <div className="col-12 my-auto">
                            <div className="container-fluid">

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="feature-item">
                                            <i className="fa fa-calendar text-primary"/>
                                            <h3>Q1 2018</h3>
                                            <ul>
                                                <li>RAYS idea created</li>
                                                <li>Initial Team Formulation</li>
                                                <li>Creation of Roadmap</li>
                                                <li>Official social medias & official email</li>
                                                <li>Github for RAYS Project developers</li>
                                                <li>Research and Study of Existing Blockchain Protocols and Algorithms
                                                </li>
                                                <li>Understanding the needs of customers</li>
                                                <li>Team Discussion and Decisions for Solutions to ensure the
                                                    requirements of Community
                                                </li>
                                                <li>Pre-Whitepaper Preparation</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="feature-item">
                                            <i className="fa fa-calendar text-primary"/>
                                            <h3>Q2 2018</h3>
                                            <ul>
                                                <li>Website Launch</li>
                                                <li>RAYS Network Ltd registration (first office in UK)</li>
                                                <li>RAYS Skymap</li>
                                                <li>Pre-launch marketing strategy and materials</li>
                                                <li>Research regulations and compliance procedures</li>
                                                <li>RAYS Enterprise and Digital ID Core Preparation</li>
                                                <li>RAYS 3S Wallet Discussion</li>
                                                <li>Find current projects that will provide valuable functionality to
                                                    RAYS Enterprise
                                                </li>
                                                <li>Whitepaper 1.0 release</li>
                                                <li>Preparation for AI Master Nodes Dev & Quantum Proof</li>
                                                <li>Preparation of Digital ID Implementation</li>
                                                <li>Understanding Industries and Integration</li>
                                                <li>Marketing campaigns launched to increase awareness of RAYS Project
                                                </li>
                                                <li>Preparation for Private and Pre Sale</li>
                                                <li>AlphaMVP - RAYS Simulator 1 </li>
                                                <li>ERC20 Smart Contract for Token Sale</li>
                                                <li>Smart Contract Audit</li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="feature-item">
                                            <i className="fa fa-calendar text-primary"/>
                                            <h3>Q3 2018</h3>
                                            <ul>
                                                <li>Private and Pre Sale</li>
                                                <li>Technical whitepaper 1.0 release</li>
                                                <li>Preparation for Exchange Listings</li>
                                                <li>Preparation for RAYS Cloud Wallet</li>
                                                <li>FBN  Blockchain Development Starts</li>
                                                <li>Release of Cloud wallet</li>
                                                <li>RAYS Partnerships</li>
                                                <li>Preparation of Windows and Linux wallets</li>
                                                <li>RAYS Enterprise Relocation</li>
                                                <li>Prepare for RAYS Exchange</li>
                                                <li>Team Expansion</li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="feature-item">
                                            <i className="fa fa-calendar text-primary"/>
                                            <h3>Q4 2018</h3>
                                            <ul>
                                                <li>First Partnership Announcement</li>
                                                <li>Release Windows and Linux Wallets</li>
                                                <li>Listing on at least one top rated exchange other than IDEX</li>
                                                <li>Listing on https://coinmarketcap.com</li>
                                                <li>Preparation for RAYS Smart Contracts</li>
                                                <li>Release RAYS Exchange</li>
                                                <li>Technical Whitepaper Update 1.1</li>
                                                <li>Release New Skymap for 2019</li>
                                                <li>Preparation for RAYS Mobile App</li>
    <li>Establishment of RAYS office in Asia</li>
<li>Academic Collaborations and Establishment of RAYS Research Laboratory</li>
                                                <li>Skymap for year 2019 release</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="feature-item">
                                            <i className="fa fa-calendar text-primary"/>
                                            <h3>2019</h3>
                                            <ul>
                                                <li>AI Master nodes</li>
                                                <li>Quantum Proof</li>
                                                <li>More Exchanges</li>
                                                <li>New Partnerships</li>
                                                <li>RAYS Flexible Blockchain Network (FBN) Performance and Security
                                                    Audits
                                                </li>
                                                <li>RAYS 3S Wallet</li>
                                                <li>RAYS Mainnet Deployment</li>
                                                <li>And a lot more to come</li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="row coins-distrib">
                                    <div className="col-lg-12">
                                        <br /><br />
                                        <h3 className="tlx00">Coins distribution</h3>
                                        <LazyLoad height={100}>
                                        <img src="/img/coins-distribution.png"/>
                                        </LazyLoad>
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
