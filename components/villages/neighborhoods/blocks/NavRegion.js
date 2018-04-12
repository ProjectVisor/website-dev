import React from 'react';
import Branding from './houses/Branding.js';
import Nav from './houses/Nav.js';

class NavRegion extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-2">
          <Branding/>
        </div>
        <div className="col-10">
          <Nav />
        </div>
      </div>
    )
  }
}

module.exports = NavRegion;
