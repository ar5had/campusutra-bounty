import React, { Component } from 'react';
import './styles.css';
import campus from '../assets/images/university-campus.svg';


class Footer extends Component {

  getFooterColumns() {
    const c1 = ['GMAT Institute', 'XAT Institute', 'NMAT Institute', 'IIFT Exam 2017', 'SNAP Exam 2017'];
    const c2 = ['Email','Facebook', 'Twitter', 'LinkedIn', 'Google+'];
    

    const c1elems = [this.getColumn('Useful Links', c1, 'col-3612', 1)];
    const c2elems = [this.getColumn('Contact Us', c2, 'col-3612', 2)];
    return (c1elems.concat(c2elems));
  }

  getColumn(heading, links, cn, key) {
    return (
      <div className={`footercolumn ${cn}`} key={key}>
      <h4>{heading}</h4>
      <div className="links">
        {links.map((elem, i) => (
          <a key={i}>
            { elem }
          </a>
        ))}            
      </div>
    </div>
    );
  }

  render() {
    return (
      <div className="Footer">
          <div className="container cols-wrapper">
            <div className={`footercolumn col-61212`} key={0}>
              <h4 className="logofooter blue"><img src={campus} />Campusutra</h4>
              <div className="logodescription">
                With an objective to Learn, Un-learn, Re-Learn, CampuSutra  thrives to nurture the talents and be knowledge partners for students’ community to assist them in their quest to crack the code of success in life.            
                <p>
                  2017 © All Rights Reserved.
                </p>
              </div>
            </div>
            {this.getFooterColumns()}
          </div>
      </div>
    );
  }
}

export default Footer;
