import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import ArticleCover from './blocks/houses/Article Cover.js';
import SectionDescription from './blocks/Section Description.js';

class Team extends React.Component {
  render() {
    return (
      <section className="features" id="team">
        <div className="container">
          <div className="section-heading text-center">
            <h2>RAYS Team</h2>
            <hr/>
          </div>
          <div className="al-sab-heading">
            <h3>Co-Founders</h3>
          </div>
          <div className="row">
            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <img className="team-list-img" src="/img/team/tomek.PNG" />
                <h3><b>Tomek Betko</b><br/>CEO</h3>
                <a href="https://www.linkedin.com/in/tomek-betko-8b4937155/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>
            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <img className="team-list-img" src="/img/team/umar.PNG" />
                <h3><b> Umar Shafiq    </b><br/>Chief Strategy Officer   </h3>
                <a href="https://www.linkedin.com/in/drumarshafiq29/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>
            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <img className="team-list-img" src="/img/team/michal.PNG" />
                <h3><b>Michal Mikolajczyk</b><br/>Chief Compliance Officer</h3>
                <a href="https://www.linkedin.com/in/michal-mikolajczyk-b23870156/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>
          </div>


          <div className="al-sab-heading">
            <h3>Advisors</h3>
          </div>
          <div className="row">
            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <img className="team-list-img" src="/img/team/ismail.PNG" />
                <h3><b>Ismail Malik</b><br/> CEO of Blockchain Lab</h3>
                <a href="https://www.linkedin.com/in/blockchain/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>
            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <img className="team-list-img" src="/img/team/daniel.PNG" />
                <h3><b>Daniel Steeves</b><br/>Editor at ICO Crowd </h3>
                <a href="https://www.linkedin.com/in/danielsteeves/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <img className="team-list-img" src="/img/team/badri.PNG" />
                <h3><b>Badri Narayanan</b><br/>PhD., Advisor to Governments</h3>
                <a href="https://www.linkedin.com/in/badrinarayanang/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <img className="team-list-img" src="/img/team/default.jpg" />
                <h3><b>Rohit Kohli</b><br/>Blockchain Specialist</h3>
                <a href="https://www.linkedin.com/in/rohitkohli73/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <img className="team-list-img" src="/img/team/fahad.PNG" />
                <h3><b>Dr. Fahad Guraya</b><br/>Ph.D - CEO at opolo.io</h3>
                <a href="https://www.linkedin.com/in/dr-fahad/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <img className="team-list-img" src="/img/team/philip.PNG" />
                <h3><b>Philip Amara</b><br/>Blockchain Strategist</h3>
                <a href="https://www.linkedin.com/in/danielsteeves/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

          </div>

          <div className="al-sab-heading">
            <h3>Business Partners</h3>
          </div>
          <div className="row">

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <img className="team-list-img" src="/img/team/keiren.PNG" />
                <h3><b>Keiran Hussey</b><br/>Blockchain HR Manager</h3>
                <a href="https://www.linkedin.com/in/blockchain/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <img className="team-list-img" src="/img/team/farr.PNG" />
                <h3><b>Daniel Farr</b><br/>Principal Blockchain Consultant</h3>
                <a href="https://www.linkedin.com/in/danielfarr1/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <img className="team-list-img" src="/img/team/pankhuri.PNG" />
                <h3><b>Pankhuri Bansal</b><br/>Marketing Manager at Bitcoin Gold and Huboi Token</h3>
                <a href="https://www.linkedin.com/in/pankhuri-bansal-54097318/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <img className="team-list-img" src="/img/team/shakil.PNG" />
                <h3><b>Muhammad Shakeel</b><br/>CEO - Brandz Network</h3>
                <a href="https://www.linkedin.com/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

          </div>

          <div className="al-sab-heading">
            <h3>Operations</h3>
          </div>
          <div className="row">

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <img className="team-list-img" src="/img/team/bilal.PNG" />
                <h3><b>Bilal Dastagir</b><br/> CEO of rayswallet.com, Specialist Cryptographer</h3>
                <a href="https://www.linkedin.com/in/bilal-dastagir-b807797a/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <img className="team-list-img" src="/img/team/shahid.PNG" />
                <h3><b>Shahid Karimi</b><br/>Web Developer, System admin</h3>
                <a href="https://www.linkedin.com/in/shahidkarimi"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <img className="team-list-img" src="/img/team/emily.PNG" />
                <h3><b>Emily Su</b><br/>Business Strategy Officer</h3>
                <a href="https://www.linkedin.com/in/shahidkarimi"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <img className="team-list-img" src="/img/team/emily.PNG" />
                <h3><b>Emily Su</b><br/>Business Strategy Officer</h3>
                <a href="https://www.linkedin.com/in/badrinarayanang/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <img className="team-list-img" src="/img/team/simon.PNG" />
                <h3><b>Simon Emil Bierling</b><br/>Former Twitter Employee - Founder at ICOSocial</h3>
                <a href="https://www.linkedin.com/in/simonbierling/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <img className="team-list-img" src="/img/team/david.PNG" />
                <h3><b>David Bochno</b><br/>Social Media Expert</h3>
                <a href="https://www.linkedin.com/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <img className="team-list-img" src="/img/team/toron.PNG" />
                <h3><b>Taron Badalian</b><br/>UI/UX Designer</h3>
                <a href="https://www.linkedin.com/in/taronbadalian/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <img className="team-list-img" src="/img/team/tatiana.PNG" />
                <h3><b>Tetiana Liulka</b><br/>Graphic Designer</h3>
                <a href="https://www.linkedin.com/in/tetiana-liulka/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

          </div>

          <div className="al-sab-heading">
            <h3>Business Managers</h3>
          </div>
          <div className="row">

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <img className="team-list-img" src="/img/team/gui.PNG" />
                <h3><b>Guillaume Droesch</b><br/>Head of Sales at Coinounce UK</h3>
                <a href="https://www.linkedin.com/in/guillaume-droesch-63810b149/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <img className="team-list-img" src="/img/team/ross.PNG" />
                <h3><b>Ross Belhomme</b><br/>Senior Associate at J. P. Morgan</h3>
                <a href="https://www.linkedin.com/in/rossbelhomme/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <img className="team-list-img" src="/img/team/sadia.PNG" />
                <h3><b>Sadia Bruce </b><br/>Business Development Officer</h3>
                <a href="https://www.linkedin.com/in/sadia-bruce-782471ab/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <img className="team-list-img" src="/img/team/ashonzay.PNG" />
                <h3><b>Ashonzay Matlock</b><br/>Blockchain Trainer</h3>
                <a href="https://www.linkedin.com/in/ashonzaymatlockjr/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <img className="team-list-img" src="/img/team/rodrigo.PNG" />
                <h3><b>Rodrigo Duarte Freitas</b><br/>Blockchain Marketing Specialist </h3>
                <a href="https://www.linkedin.com/in/rodrigo-duarte-freitas-b48944159/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <img className="team-list-img" src="/img/team/darryl.PNG" />
                <h3><b>Darryl Lo</b><br/>CEO at Alpha Blockchain Solution</h3>
                <a href="https://www.linkedin.com/in/darryl-lo/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <img className="team-list-img" src="/img/team/riasat.PNG" />
                <h3><b>Riasad Hadi Hossain</b><br/>Social Media Expert</h3>
                <a href="https://www.linkedin.com/in/riasad-hadi-hossain-47b41a15a/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <img className="team-list-img" src="/img/team/aqib.PNG" />
                <h3><b>Aqib Malik</b><br/>UAE Business Expert</h3>
                <a href="https://www.linkedin.com/in/aqib00/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <img className="team-list-img" src="/img/team/rangana.PNG" />
                <h3><b>Rangana Punchyihewa</b><br/> Community Management Expert</h3>
                <a href="https://www.linkedin.com/in/rangana-punchihewa-56001182/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <img className="team-list-img" src="/img/team/luciano.PNG" />
                <h3><b>Luciano DeAngelo</b><br/>Project Manager at ARCADIA</h3>
                <a href="https://www.linkedin.com/in/lucianodeangelo/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <img className="team-list-img" src="/img/team/ahmad.PNG" />
                <h3><b>Ahmad Dewanto</b><br/>ICO Campaign Management</h3>
                <a href="https://www.linkedin.com/in/ahmad-dewanto-choirul-huda/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <img className="team-list-img" src="/img/team/elisha.PNG" />
                <h3><b>Elisha Owusu Akyaw</b><br/>Marketing Specialist</h3>
                <a href="https://www.linkedin.com/in/elisha-owusu-akyaw/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <img className="team-list-img" src="/img/team/micheal.PNG" />
                <h3><b>Michael Gehlert </b><br/>Blockchain Enthusiast</h3>
                <a href="https://www.linkedin.com/in/rechtsberatung/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <img className="team-list-img" src="/img/team/tian.PNG" />
                <h3><b>Tian Hua Chen </b><br/> Programming Specialist</h3>
                <a href="https://www.linkedin.com/in/%E5%A4%A9%E5%8D%8E-%E9%99%88-3b6b79ba/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <img className="team-list-img" src="/img/team/guiller-jay.PNG" />
                <h3><b>Guiller Jay Felix</b><br/> Specialist in Bounty Management </h3>
                <a href="https://www.linkedin.com/in/guiller-jay-felix/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <img className="team-list-img" src="/img/team/roland.PNG" />
                <h3><b>Roland Alexander </b><br/>Crypto Consultant</h3>
                <a href="https://www.linkedin.com/in/roland-alexander-47aa432b/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

          </div>
          </div>
      </section>
	  )
  }
}

module.exports = Team;
