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
            <h2>About RAYS</h2>
            <p>Discover core RAYS features and functionality</p>
            <hr/>
          </div>
          <div className="row">
            <div className="col-12 my-auto">
              <div className="container-fluid">

                <div className="row">
                  <div className="col-lg-10 center-wala">
                    <div className="feature-item full-width-feature">
                      <i className="fa fa-cubes text-primary"/>
                      <h3>Prime RAYS Features</h3>
                      <ul>
                        <li>Customized Delegated Proof of Stake (CDPOS)</li>
                        <li>Bulletproof Protocol for Privacy</li>
                        <li>Flexible Blockchain Network (FBN) [Public and Private]</li>
                        <li>Enterprise Privacy Blockchain Solution (EPBS)</li>
                        <li>Zero Transaction Fee</li>
                        <li>RAYS PAY & Microtransactions</li>
                        <li>Multi Transaction System (MTS)</li>
                        <li>RAYS Research Laboratory</li>
                        <li>RAYS 3S Wallet</li>
                        <li>Quantum Proof</li>
                        <li>GDPR Compliance</li>

                      </ul>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <div className="feature-item">
                      <i className="fa fa-cubes text-primary"/>
                      <h3>A Blockchain</h3>
                      <p>
                        RAYS Network is based on a whole new blockchain technology which is growing and improving all the time. For a few years now, blockchain technology has been increasingly adopted, but there are still many problems that hold this technology back from going mainstream. RAYS Network is looking to solve many of these problems.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="feature-item">
                      <i className="fa fa-bitcoin text-primary"/>
                      <h3>A Cryptocurrency</h3>
                      <p>
                        RAYS Network is a cryptocurrency that aims to revolutionize your experience within the cryptocurrency world. We have identified common cryptocurrency issues ranging from usability to how decentralized systems operate. We are adopting known features in the cryptocurrency world such as Delegated Proof-of-Stake (DPoS) and multi-algorithm protocol but we have modified features to accommodate our community’s needs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="feature-item">
                      <i className="fa fa-eye-slash text-primary"/>
                      <h3>Privacy and Security</h3>
                      <p>
                        We will achieve real privacy and security by choosing the right algorithm (in this case the Bulletproof Algorithm). By refining it in our unique way, we will be able to achieve really high network scalability and keep the highest standards of safety at the same time.
                      </p>
                    <p>
                        The implementation of one of the two additional protocols such as TOR or I2P will allow our users to enjoy total privacy. Thanks to these two protocols, none of the transactions can be traced in any way.
                    </p>
                      <p>
                        The implementation of the bulletproof protocol will make the RAYS Network also immune to attacks from quantum computers.

                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="feature-item">
                      <i className="fa fa-diamond text-primary"/>
                      <h3>Ultra Fast Transaction with Zero Fee</h3>
                      <p>
                        By choosing a multi-algorithm protocol, we will be able to improve it in an appropriate and unique way for us to maximize the scalability of our blockchain network.
                      </p>
                    <p>
                        Through the internal voting of our development team, we unanimously chose that our blockchain network will have the zero transaction fee, which means that all transactions carried out by RAYS Network will have zero costs so that RAYS cryptocurrency may get well adopted at highest possible level.

                      </p>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <div className="feature-item">
                      <i className="fa fa-user-o text-primary"/>
                      <h3>Customized Delegated Proof of Stake</h3>
                      <p>
                        One of the special features of our project is Customized-Delegated Proof-of-Stake or C-DPoS. It is the most decentralized, fast, and efficient protocol known to date. C-DPoS is an extended version of DPoS with  inclusion of Trusted and Efficient labels being assigned to best performing Delegates. C-DPoS a robust and flexible consensus protocol. Deterministic selection of block producers will allow transactions to be confirmed in an average of just 1 sec.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="feature-item">
                      <i className="fa fa-diamond text-primary"/>
                      <h3>Multi Transaction System (MTS)</h3>
                      <p>
                        One of our planned blockchain feature is a one-click Multi-Transaction System (MTS) where a head of the company can send payments to all of its employees using just one click. There are hundreds of such possible applications of blockchain. Not even limited to digital currency payment, in such blockchain network, one user may send data to hundreds of other users or systems in the blockchain.
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
