import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import Laptop from './blocks/houses/Laptop.js';
import SectionDescription from './blocks/Section Description.js';

class Skymap extends React.Component {
  render() {
    return (
      <section className="skymap bg-primary text-center" id="skymap">
        <div className="container">
          <h1>RAYS Partnerships</h1>
          <div id="demo" class="carousel slide" data-ride="carousel">
            <ul class="carousel-indicators">
              <li data-target="#demo" data-slide-to="0" class="active"></li>
              <li data-target="#demo" data-slide-to="1"></li>
              <li data-target="#demo" data-slide-to="2"></li>
            </ul>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/img/partner_apolo.jpg" alt="Los Angeles" height="100" />
                  <div className="carousel-caption">
                  </div>
              </div>
              <div class="carousel-item">
                <img src="/img/partner-appzilla.jpg" alt="Appzilla" height="100" />
                  <div class="carousel-caption">
                  </div>
              </div>
              <div class="carousel-item">
                <img src="/img/cryptofusion.png" alt="CryptoFusion" height="100" />
                  <div class="carousel-caption">
                  </div>
              </div>
              <div class="carousel-item">
                <img src="/img/arcadiamgroup.png" alt="Arcadiamgroup" height="100" />
                  <div class="carousel-caption">
                  </div>
              </div>
              <div class="carousel-item">
                <img src="/img/partner-complexitylabs.jpg" alt="ComplexityLabs" height="100" />
                  <div class="carousel-caption">
                  </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#demo" data-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
              <span class="carousel-control-next-icon"></span>
            </a>
          </div>
        </div>
      </section>
    )
  }
}


module.exports = Skymap;
