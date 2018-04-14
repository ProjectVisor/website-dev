import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import ArticleCover from './blocks/houses/Article Cover.js';
import SectionDescription from './blocks/Section Description.js';

class Features extends React.Component {
  render() {
    return (
      <section className="features" id="features">
        <div className="container">
          <div className="section-heading text-center">
            <h2>Visor Features</h2>
            <p>Discover core Visor features and functionality</p>
            <hr/>
          </div>
          <div className="row">
            <div className="col-12 my-auto">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="feature-item">
                      <i className="fa fa-lock fa-5x text-primary"/>
                      <h3>Privacy & Security</h3>
                      <p>
                        In order to maximize privacy, we implemented two protocols in the code and our QT wallet:
                        TOR and I2P so that everyone can enjoy the highest protection and privacy using Visor Coin.
                        In the future, we intend to implement something very special to drastically increase Visor's scalability.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="feature-item">
                      <i className="fa fa-arrows-alt fa-5x text-primary"/>
                      <h3>High Scalability & No Fees</h3>
                      <p>
                        Through the use of multi-algorithms, Visor's scalability is very high. However,
                        we will continue to work to constantly improved this aspect. After voting, the Visor team decided
                        that there will be no fees between XVR transactions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="feature-item">
                      <i className="fa fa-users fa-5x text-primary"/>
                      <h3>Community Driven</h3>
                      <p>
                        Visor is created <b>by</b> people, <b>for</b> people, which means that our community is the biggest part of our
                        team, that's why our development team is always in close relations with our community.
                        Our project has an open source code which literally anyone can look at at any moment.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="feature-item">
                      <i className="fa fa-database fa-5x text-primary"/>
                      <h3>Delegated Proof-of-Stake (DPoS)</h3>
                      <p>
                        The Visor development team has decided to implement Delegated Proof-of-Stake (DPoS)
                        as we believe that this is the most secure mining algorithm. DPoS plays the role of simple
                        stake and masternode in the sense that it requires a certain minimum amount of coins in the wallet.
                        The fact that DPoS makes it possible to stake without an open wallet makes it more flexible for
                        our system, minimizing exposure to attacks.
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
