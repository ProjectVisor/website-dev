import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import CallToAction from './blocks/Call To Action.js';

class Social extends React.Component {
    render() {
        return (
            <section className="contact bg-primary cocial_bg" id="social">
                <div className="container">
                    <h2>
                        Join our amazing community
                    </h2>
                    <ul className="list-inline list-social">
                        <li className="list-inline-item social-twitter">
                            <a target="_blank" href="https://twitter.com/Rays_Net">
                                <i className="fa fa-twitter"/>
                            </a>
                        </li>
                        <li className="list-inline-item social-facebook">
                            <a target="_blank" href="https://www.facebook.com/RaysNetwork/">
                                <i className="fa fa-facebook"/>
                            </a>
                        </li>
                        <li className="list-inline-item social-google-plus">
                            <a target="_blank" href="t.me/RaysNetwork">
                                <i className="fa fa-telegram"/>
                            </a>
                        </li>
                        <li className="list-inline-item social-github">
                            <a target="_blank" href="https://github.com/RaysNetwork ">
                                <i className="fa fa-github"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}


module.exports = Social;