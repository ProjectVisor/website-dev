import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import Nav from './blocks/houses/Nav.js';

class Footer extends React.Component {
  render() {
    return (
      <section className="footer">
        <Container>
          <Row>
            <span />
          </Row>
        </Container>
      </section>
    )
  }
}


module.exports = Footer;
