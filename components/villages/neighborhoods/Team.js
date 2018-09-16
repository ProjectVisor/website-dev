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
                <img className="team-list-img" src="/img/team/umar.PNG" />
                </LazyLoad>
                <h3>Umar Shafiq</h3>
                <div className="member-role">Chief Executive Officer </div>
                <a href="https://www.linkedin.com/in/drumarshafiq29/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>
            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                  <img className="team-list-img" src="/img/team/tomek.PNG" />
                </LazyLoad>
                <h3>Tomasz Betko</h3>
                <div className="member-role">Director</div>
                <a href="https://www.linkedin.com/in/tomek-betko-8b4937155/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>
            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                <img className="team-list-img" src="/img/team/michal.PNG" />
                </LazyLoad>
                <h3>Michal Mikolajczyk</h3>
                <div className="member-role">Chief Compliance Officer</div>
                <a href="https://www.linkedin.com/in/michal-mikolajczyk-b23870156/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                  <img className="team-list-img" src="/img/team/micheal.PNG" />
                </LazyLoad>
                <h3>Michael Gehlert</h3>
                <div className="member-role">Chief Business Officer</div>
                <a href="https://www.linkedin.com/in/rechtsberatung/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
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
                <h3>Ismail Malik</h3>
                <div className="member-role">CEO of Blockchain Lab</div>
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
                <h3>Daniel Steeves</h3>
                <div className="member-role">CEO - Steeves Solution</div>
                <a href="https://www.linkedin.com/in/danielsteeves/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>
            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                  <img className="team-list-img" src="/img/team/mattis.jpg" />
                </LazyLoad>
                <h3>Dr. Mattias Kruskopf (Ph.D)</h3>
                <div className="member-role">Post Doctorate at NIST - USA</div>
                <a href="https://www.linkedin.com/in/mattias-kruskopf-bb7b9b165/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>
            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                <img className="team-list-img" src="/img/team/badri.PNG" />
                </LazyLoad>
                <h3>Badri Narayanan</h3>
                <div className="member-role">PhD., Advisor to Governments</div>
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
                <h3>Dr. Fahad Guraya</h3>
                <div className="member-role">Ph.D - CEO at opolo.io</div>
                <a href="https://www.linkedin.com/in/dr-fahad/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                  <img className="team-list-img" src="/img/team/simon.PNG" />
                </LazyLoad>
                <h3>Simon Emil Bierling</h3>
                <div className="member-role">Former Twitter Employee - Founder at ICOSocial</div>
                <a href="https://www.linkedin.com/in/simonbierling/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                  <img className="team-list-img" src="/img/team/shakil.PNG" />
                </LazyLoad>
                <h3>Muhammad Shakil</h3>
                <div className="member-role">CEO - BandZ Network</div>
                <a href="https://www.linkedin.com/in/shakilkaist"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                  <img className="team-list-img" src="/img/team/Chakrabarty.png" />
                </LazyLoad>
                <h3>Dr. Subhajit Chakrabarty</h3>
                <div className="member-role">Ph.D Finance, Ph.D Researcher in Computer Science</div>
                <a href="https://www.linkedin.com/in/chakrabarty/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                  <img className="team-list-img" src="/img/team/joss.png" />
                </LazyLoad>
                <h3>Joss Colchester</h3>
                <div className="member-role">Founder & Director at Complexity Labs</div>
                <a href="https://www.linkedin.com/in/josscolchester/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                  <img className="team-list-img" src="/img/team/vanipha.jpg" />
                </LazyLoad>
                <h3>Wannipha Jen Buakaew</h3>
                <div className="member-role">Jenny from the Blockchain</div>
                <a href="https://www.linkedin.com/in/jennyfromtheblockchain/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>
<div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                  <img className="team-list-img" src="/img/team/savio.jpg" />
                </LazyLoad>
                <h3>Savio Gomez</h3>
                <div className="member-role">Fintech Blockchain AI Start up Advisor</div>
                <a href="https://www.linkedin.com/in/savio-gomez-capt/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                  <img className="team-list-img" src="/img/team/thomas.jpg" />
                </LazyLoad>
                <h3>Thomas Enechi</h3>
                <div className="member-role">Entrepreneur | Blockchain/ICO Advisor</div>
                <a href="https://www.linkedin.com/in/chitom/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
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
                  <img className="team-list-img" src="/img/team/amorgia.jpg" />
                </LazyLoad>
                <h3>Pankaj Gupta</h3>
                <div className="member-role">Blockchain Entrepreneur | Angel Investor | Advisorr</div>
                <a href="https://www.linkedin.com/in/pankajmhealth/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>


            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                <img className="team-list-img" src="/img/team/keiren.PNG" />
                </LazyLoad>
                <h3>Keiran Hussey</h3>
                <div className="member-role">Blockchain HR Manager</div>
                <a href="https://www.linkedin.com/in/keiran-hussey"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                <img className="team-list-img" src="/img/team/farr.PNG" />
                </LazyLoad>
                <h3>Daniel Farr</h3>
                <div className="member-role">Principal Blockchain Consultant</div>
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
                <h3>Pankhuri Bansal</h3>
                <div className="member-role">Marketing Manager at Bitcoin Gold and Huboi Token</div>
                <a href="https://www.linkedin.com/in/pankhuri-bansal-54097318/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                  <img className="team-list-img" src="/img/team/jason.png" />
                </LazyLoad>
                <h3>Jason Coles</h3>
                <div className="member-role">Community Director at Nauticus</div>
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
                <h3>Anas Alvi</h3>
                <div className="member-role">CTO at AppZilla.in</div>
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
                <h3>Umer Aslam</h3>
                <div className="member-role">CEO at Digitize Coin, Former Portfolio Manager at IBM</div>
                <a href="https://www.linkedin.com/in/umer-aslam-03b06a40/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                  <img className="team-list-img" src="/img/team/kasal.jpg" />
                </LazyLoad>
                <h3>Robert Schmidt</h3>
                <div className="member-role">Content Writer</div>
                <a href="https://www.linkedin.com/in/robert-schmidt-2a8b9875/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
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
                <h3>Bilal Dastagir</h3>
                <div className="member-role">CEO of rayswallet.com, Specialist Cryptographer</div>
                <a href="https://www.linkedin.com/in/bilal-dastagir-msc-eng-b807797a"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                <img className="team-list-img" src="/img/team/shahid.PNG" />
                </LazyLoad>
                <h3>Shahid Karimi</h3>
                <div className="member-role">Web Developer, System admin</div>
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
                <h3>Emily Su</h3>
                <div className="member-role">Business Strategy Officer</div>
                <a href="https://www.linkedin.com/in/emilysu2018"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>
            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                  <img className="team-list-img" src="/img/team/philip.PNG" />
                </LazyLoad>
                <h3>Philip Amara</h3>
                <div className="member-role">Blockchain Strategist</div>
                <a href="https://www.linkedin.com/in/philip-a-198885156"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>



            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                <img className="team-list-img" src="/img/team/david.PNG" />
                </LazyLoad>
                <h3>David Bochno</h3>
                <div className="member-role">Social Media Expert</div>
                <a href="https://www.linkedin.com/in/dawid-bochno-596444165"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                <img className="team-list-img" src="/img/team/tatiana.PNG" />
                </LazyLoad>
                <h3>Tatiana Liulka</h3>
                <div className="member-role">Graphic Designer</div>
                <a href="https://www.linkedin.com/in/tetiana-liulka/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                  <img className="team-list-img" src="/img/team/sadia.PNG" />
                </LazyLoad>
                <h3>Sadia Bruce</h3>
                <div className="member-role">Business Development Officer</div>
                <a href="https://www.linkedin.com/in/sadia-bruce-782471ab/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
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
                <img className="team-list-img" src="/img/team/ashonzay.PNG" />
                </LazyLoad>
                <h3>Ashonzay Matlock</h3>
                <div className="member-role">Blockchain Trainer</div>
                <a href="https://www.linkedin.com/in/ashonzaymatlockjr/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                <img className="team-list-img" src="/img/team/aqib.PNG" />
                </LazyLoad>
                <h3>Aqib Malik</h3>
                <div className="member-role">UAE Business Expert</div>
                <a href="https://www.linkedin.com/in/aqib00/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                <img className="team-list-img" src="/img/team/ahmad.PNG" />
                </LazyLoad>
                <h3>Ahmad Dewanto</h3>
                <div className="member-role">ICO Campaign Management</div>
                <a href="https://www.linkedin.com/in/ahmad-dewanto-choirul-huda/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>
            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                <img className="team-list-img" src="/img/team/tian.PNG" />
                </LazyLoad>
                <h3>Tian Hua Chen</h3>
                <div className="member-role">Programming Specialist</div>
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
                <h3>Guiller Jay Felix</h3>
                <div className="member-role">Specialist in Bounty Management</div>
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
                <h3>Roland Alexander</h3>
                <div className="member-role">Crypto Consultant</div>
                <a href="https://www.linkedin.com/in/roland-alexander-47aa432b/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                  <img className="team-list-img" src="/img/team/Divij.jpg" />
                </LazyLoad>
                <h3>Divij Sood</h3>
                <div className="member-role">Business Manager at RAYS Network</div>
                <a href="https://www.linkedin.com/in/divijsood3"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
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
                  <img className="team-list-img" src="/img/team/makus.jpg" />
                </LazyLoad>
                <h3>Markus Saitmacher</h3>
                <div className="member-role">Lead Developer </div>
                <a href="https://www.linkedin.com/in/markus-saitmacher-b68164152/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                  <img className="team-list-img" src="/img/team/hassan.jpg" />
                </LazyLoad>
                <h3>Hassan Hashmi</h3>
                <div className="member-role">DPoS Architecture Design </div>
                <a href="https://www.linkedin.com/in/hassaan-hashmi-258523b6/"><i className="fa fa-linkedin-square linked-in-ico"></i></a>
                <p className="text-muted">
                </p>
              </div>
            </div>

            <div className="col-lg-4 team-item-row">
              <div className="feature-item">
                <LazyLoad height={100}>
                  <img className="team-list-img" src="/img/team/sal.png" />
                </LazyLoad>
                <h3>Sal Kuyateh</h3>
                <div className="member-role">Blockchain  Developer</div>
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
                <h3>Nemanja Lazic</h3>
                <div className="member-role">Blockchain  Developer</div>
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
