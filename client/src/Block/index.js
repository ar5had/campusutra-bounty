import React, { Component } from 'react';
import './styles.css';

class Block extends Component {
  getItems(items) {
    return(
      items.map( (elem, i) => (
        <div className="blockbody" key={i}>
          <div>
            <div />
            <h4>{elem.text}</h4>
          </div>
          <a>Read More...</a>
        </div>
      ))
    );
  }

  render() {
    const data = this.props.data;
    return (
      <div className="Block">
        <div className="upper">
          <div className="blockimgwrapper">
            <img src={data.icon} className="blockimg" />
          </div>
          <h4 className="blockheading blue">{data.heading}</h4>
        </div>
        {this.getItems(data.items)}
        <button className="bluebackground morebtn">More</button>
      </div>
    );
  }
}

export default Block;
