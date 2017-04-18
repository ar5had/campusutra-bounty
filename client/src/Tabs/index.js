import React, { Component } from 'react';
import './styles.css';

class Tabs extends Component {
  constructor(props){
    super(props);
    this.state = {
      tabs: ['Admission Alerts', 'Convocation', 'Placement News'],
      tabsContent: [
        {headings: ['MBA Admission 2017 in North Eastern Hill University','NIT Rourkela MBA Admission 2017 :Apply Now','Applications invited for MBA Program 2017 at NIT, Surathkal']},
        {headings: ['KIAMS Annual Convocation 2017- Mr. Jayakumar, MD, Prime Securities was the Chief Guest', 'Indian Institute Of Management Nagpur Concludes First Convocation Today','SBI Chairperson Arundhati Bhattacharya addressed  IIM Sambalpur first convocation']},
        {headings: ['NMIMS, School of Business Management, Mumbai','Symbiosis Institute of Business Management, Bengaluru Placement report 2017','Symbiosis Institute of Business Management Pune- MBA Placement 2017']}
      ],
      active: 0
    };
  }

  getTabContent() {
    const active = this.state.active;
    return [1,2,3].map( (e, i) => (
      <div className="col">
        <div/>
        <h4>{this.state.tabsContent[active].headings[i]}</h4>
        <p><a>Read More</a> </p>        
      </div>
    ) );
  }

  render() {
    
    return (
      <div className="Tabs container">
        <div className="tabcontainer">
          {this.state.tabs.map((e, i) => 
          <button
            onClick={() => {
              this.setState({active: i});
            }}
            key={i}
            className={i === this.state.active ? `blue tab active`: 'blue tab'}>{e}</button>)}        
        </div>
        <div className="tabccontainer">
          {this.getTabContent()}
        </div>
      </div>
    )
  }
}

export default Tabs;
