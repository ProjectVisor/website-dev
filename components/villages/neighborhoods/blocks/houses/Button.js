import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  render() {
    return (
      <div>
        <button className="button mt-50">{this.props.btnLabel}</button>
      </div>
    )
  }
}

module.exports = Button;
