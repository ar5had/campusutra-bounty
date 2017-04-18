import React, { Component } from 'react';
import './styles.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      navitems: [
        {text: 'Home'}, {text: 'B School'}, {text: 'T School'}, {text: 'MBA Admission Hub'},
        {text: 'University'}, {text: 'Medical College'}, {text: 'Campus Placement'},
        {text: 'Upload'}
      ]
    }
  } 

  getNavItems() {
    return this.state.navitems.map(
      (item, i) => (

        <div className={i === this.state.current ? 'navitem current': 'navitem'} key={i}>
          <button onClick={() => {
            this.setState({current: i});
          }}>
            {item.text}
          </button>
        </div>
      )
    );
  }

  render() {
    return (
      <div className="Navbar">
        <div className="container navitemsWrapper">
          {this.getNavItems()}
        </div>
      </div>
    );
  }
}

export default Navbar;
