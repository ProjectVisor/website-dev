import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import ArticleCover from './blocks/houses/Article Cover.js';
import SectionDescription from './blocks/Section Description.js';
import LazyLoad from 'react-lazyload';

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
                <LazyLoad height={100}>
                  <img className="team-list-img" src="/img/team/tomek.PNG" />
                </LazyLoad>
                <h3><b>Tomek Betko</b><br/>CEO</h3>
                <a href="https://www.linkedin.com/in/tomek-betko-8b4937155/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>
            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                <img className="team-list-img" src="/img/team/umar.PNG" />
                </LazyLoad>
                <h3><b> Umar Shafiq    </b><br/>Chief Strategy Officer   </h3>
                <a href="https://www.linkedin.com/in/drumarshafiq29/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>
            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                <img className="team-list-img" src="/img/team/michal.PNG" />
                </LazyLoad>
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
                <LazyLoad height={100}>
                <img className="team-list-img" src="/img/team/ismail.PNG" />
                </LazyLoad>
                <h3><b>Ismail Malik</b><br/> CEO of Blockchain Lab</h3>
                <a href="https://www.linkedin.com/in/blockchain/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>
            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                <img className="team-list-img" src="/img/team/daniel.PNG" />
                </LazyLoad>
                <h3><b>Daniel Steeves</b><br/>CEO - Steeves Solution</h3>
                <a href="https://www.linkedin.com/in/danielsteeves/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>
            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                <img className="team-list-img" src="/img/team/badri.PNG" />
                </LazyLoad>
                <h3><b>Badri Narayanan</b><br/>PhD., Advisor to Governments</h3>
                <a href="https://www.linkedin.com/in/badrinarayanang/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                <img className="team-list-img" src="/img/team/fahad.PNG" />
                </LazyLoad>
                <h3><b>Dr. Fahad Guraya</b><br/>Ph.D - CEO at opolo.io</h3>
                <a href="https://www.linkedin.com/in/dr-fahad/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                <img className="team-list-img" src="/img/team/philip.PNG" />
                </LazyLoad>
                <h3><b>Philip Amara</b><br/>Blockchain Strategist</h3>
                <a href="https://www.linkedin.com/in/danielsteeves/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                  <img className="team-list-img" src="/img/team/shakil.PNG" />
                </LazyLoad>
                <h3><b>Muhammad Shakeel</b><br/>CEO - BandZ Network</h3>
                <a href="https://www.linkedin.com/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                  <img className="team-list-img" src="/img/team/chakrabarty.png" />
                </LazyLoad>
                <h3><b>Dr. Subhajit Chakrabarty</b><br/>Ph.D Finance, Ph.D in Computer Science</h3>
                <a href="https://www.linkedin.com/in/chakrabarty/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
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
                <LazyLoad height={100}>
                <img className="team-list-img" src="/img/team/keiren.PNG" />
                </LazyLoad>
                <h3><b>Keiran Hussey</b><br/>Blockchain HR Manager</h3>
                <a href="https://www.linkedin.com/in/blockchain/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                <img className="team-list-img" src="/img/team/farr.PNG" />
                </LazyLoad>
                <h3><b>Daniel Farr</b><br/>Principal Blockchain Consultant</h3>
                <a href="https://www.linkedin.com/in/danielfarr1/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                <img className="team-list-img" src="/img/team/pankhuri.PNG" />
                </LazyLoad>
                <h3><b>Pankhuri Bansal</b><br/>Marketing Manager at Bitcoin Gold and Huboi Token</h3>
                <a href="https://www.linkedin.com/in/pankhuri-bansal-54097318/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                  <img className="team-list-img" src="/img/team/talha.png" />
                </LazyLoad>
                <h3><b>Taha Dhailey</b><br/>DApp Developer and Blockchain Trainer</h3>
                <a href="https://www.linkedin.com/in/taha-dhailey-0a813b83/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                  <img className="team-list-img" src="/img/team/jason.png" />
                </LazyLoad>
                <h3><b>Jason Coles</b><br/>Community Director at Nauticus</h3>
                <a href="https://www.linkedin.com/in/jason-coles-45043b76/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                  <img className="team-list-img" src="/img/team/anas.png" />
                </LazyLoad>
                <h3><b>Anas Alvi</b><br/>CTO at AppZilla.in</h3>
                <a href="https://www.linkedin.com/in/anas-alvi-9b7453a4/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                  <img className="team-list-img" src="/img/team/umer-aslam.png" />
                </LazyLoad>
                <h3><b>Umer Aslam</b><br/>CEO at Digitize Coin, Former Portfolio Manager at IBM</h3>
                <a href="https://www.linkedin.com/in/umer-aslam-03b06a40/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
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
                <LazyLoad height={100}>
                <img className="team-list-img" src="/img/team/bilal.PNG" />
                </LazyLoad>
                <h3><b>Bilal Dastagir</b><br/> CEO of rayswallet.com, Specialist Cryptographer</h3>
                <a href="https://www.linkedin.com/in/bilal-dastagir-b807797a/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                <img className="team-list-img" src="/img/team/shahid.PNG" />
                </LazyLoad>
                <h3><b>Shahid Karimi</b><br/>Web Developer, System admin</h3>
                <a href="https://www.linkedin.com/in/shahidkarimi"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                <img className="team-list-img" src="/img/team/emily.PNG" />
                </LazyLoad>
                <h3><b>Emily Su</b><br/>Business Strategy Officer</h3>
                <a href="https://www.linkedin.com/in/shahidkarimi"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                <img className="team-list-img" src="/img/team/simon.PNG" />
                </LazyLoad>
                <h3><b>Simon Emil Bierling</b><br/>Former Twitter Employee - Founder at ICOSocial</h3>
                <a href="https://www.linkedin.com/in/simonbierling/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                <img className="team-list-img" src="/img/team/david.PNG" />
                </LazyLoad>
                <h3><b>David Bochno</b><br/>Social Media Expert</h3>
                <a href="https://www.linkedin.com/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                <img className="team-list-img" src="/img/team/tatiana.PNG" />
                </LazyLoad>
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
                <LazyLoad height={100}>
                <img className="team-list-img" src="/img/team/gui.PNG" />
                </LazyLoad>
                <h3><b>Guillaume Droesch</b><br/>Head of Sales at Coinounce UK</h3>
                <a href="https://www.linkedin.com/in/guillaume-droesch-63810b149/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                <img className="team-list-img" src="/img/team/sadia.PNG" />
                </LazyLoad>
                <h3><b>Sadia Bruce </b><br/>Business Development Officer</h3>
                <a href="https://www.linkedin.com/in/sadia-bruce-782471ab/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                <img className="team-list-img" src="/img/team/ashonzay.PNG" />
                </LazyLoad>
                <h3><b>Ashonzay Matlock</b><br/>Blockchain Trainer</h3>
                <a href="https://www.linkedin.com/in/ashonzaymatlockjr/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                <img className="team-list-img" src="/img/team/rodrigo.PNG" />
                </LazyLoad>
                <h3><b>Rodrigo Duarte Freitas</b><br/>Blockchain Marketing Specialist </h3>
                <a href="https://www.linkedin.com/in/rodrigo-duarte-freitas-b48944159/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                <img className="team-list-img" src="/img/team/darryl.PNG" />
                </LazyLoad>
                <h3><b>Darryl Lo</b><br/>CEO at Alpha Blockchain Solution</h3>
                <a href="https://www.linkedin.com/in/darryl-lo/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                <img className="team-list-img" src="/img/team/riasat.PNG" />
                </LazyLoad>
                <h3><b>Riasad Hadi Hossain</b><br/>Social Media & ICO Expert</h3>
                <a href="https://www.linkedin.com/in/riasad-hadi-hossain-47b41a15a/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                <img className="team-list-img" src="/img/team/aqib.PNG" />
                </LazyLoad>
                <h3><b>Aqib Malik</b><br/>UAE Business Expert</h3>
                <a href="https://www.linkedin.com/in/aqib00/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                <img className="team-list-img" src="/img/team/rangana.PNG" />
                </LazyLoad>
                <h3><b>Rangana Punchyihewa</b><br/> Community Management Expert</h3>
                <a href="https://www.linkedin.com/in/rangana-punchihewa-56001182/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                <img className="team-list-img" src="/img/team/luciano.PNG" />
                </LazyLoad>
                <h3><b>Luciano DeAngelo</b><br/>Project Manager at ARCADIA</h3>
                <a href="https://www.linkedin.com/in/lucianodeangelo/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                <img className="team-list-img" src="/img/team/ahmad.PNG" />
                </LazyLoad>
                <h3><b>Ahmad Dewanto</b><br/>ICO Campaign Management</h3>
                <a href="https://www.linkedin.com/in/ahmad-dewanto-choirul-huda/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                <img className="team-list-img" src="/img/team/elisha.PNG" />
                </LazyLoad>
                <h3><b>Elisha Owusu Akyaw</b><br/>Marketing Specialist</h3>
                <a href="https://www.linkedin.com/in/elisha-owusu-akyaw/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                <img className="team-list-img" src="/img/team/micheal.PNG" />
                </LazyLoad>
                <h3><b>Michael Gehlert </b><br/>Blockchain Enthusiast</h3>
                <a href="https://www.linkedin.com/in/rechtsberatung/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                <img className="team-list-img" src="/img/team/tian.PNG" />
                </LazyLoad>
                <h3><b>Tian Hua Chen </b><br/> Programming Specialist</h3>
                <a href="https://www.linkedin.com/in/%E5%A4%A9%E5%8D%8E-%E9%99%88-3b6b79ba/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                <img className="team-list-img" src="/img/team/guiller-jay.PNG" />
                </LazyLoad>
                <h3><b>Guiller Jay Felix</b><br/> Specialist in Bounty Management </h3>
                <a href="https://www.linkedin.com/in/guiller-jay-felix/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                <img className="team-list-img" src="/img/team/roland.PNG" />
                </LazyLoad>
                <h3><b>Roland Alexander </b><br/>Crypto Consultant</h3>
                <a href="https://www.linkedin.com/in/roland-alexander-47aa432b/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                  <img className="team-list-img" src="/img/team/vivek.png" />
                </LazyLoad>
                <h3><b>Vivek Lalan </b><br/>iOS Developer</h3>
                <a href="https://www.linkedin.com/in/vivek-lalan-880b5a80/ "><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

          </div>

          <div className="al-sab-heading">
            <h3>Blockchain Developers</h3>
          </div>
          <div className="row">
            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                  <img className="team-list-img" src="/img/team/sal.png" />
                </LazyLoad>
                <h3><b>Sal Kuyateh</b><br/>Blockchain  Developer</h3>
                <a href="https://www.linkedin.com/in/sal-kuyateh-25905182/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                  <img className="team-list-img" src="/img/team/lazik.png" />
                </LazyLoad>
                <h3><b>Nemanja Lazic</b><br/>Blockchain  Developer</h3>
                <a href="https://www.linkedin.com/in/nemanja-lazic-743969153/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
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
