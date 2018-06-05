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
            <h2>The Problem</h2><br />
            <hr/>
            <p>The industries need a blockchain which should be Secure and Private. General cryptocurrency users require Low Transaction Fee, Fast Speed, and Security</p>
            <img className="pws09" src="/img/the-problem.svg" />
          </div>

          <div className="section-heading text-center">
            <h2>The Solution: Flexible Blockchain Network (FBN)</h2><br />
            <hr/>
            <p>We have a solution for both; a Secure and Private blockchain for industries, and a Secure and Fast cryptocurrency for general users. Our technical team is working on a Flexible Blockchain Network (FBN) which may switch between General and Enterprise users as required by the users for their needs. Sufficient progress has already been made and a Minimum Viable Product (MVP) has already been developed to prove the FBN concept. Bulletproof protocol is selected to implement this Flexible Blockchain Network.</p>
            <img  className="pws09" src="/img/the-solution.svg" />
          </div>

        </div>
      </section>
	  )
  }
}

module.exports = Features;
