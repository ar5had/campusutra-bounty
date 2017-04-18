import React, { Component } from 'react';
import './styles.css';

import Header from '../Header';
import Slider from '../Slider';
import Footer from '../Footer';
import Block from '../Block';
import Tabs from '../Tabs';

import news from '../assets/images/newspaper.svg';
import read from '../assets/images/read.svg';

class App extends Component {
  
  getAllBlocks(blocks) {
    return blocks.map( (block, i) => <Block data={block} key={i} />);
  }

  render() {
    const blocks = [
      { heading: 'Most Read', icon:read, color: '#ff5483 !important', items: [
          {icon: '', text: 'Jump in average placement package at Delhi/NCR B-Schools (MDI Gurgaon 18.53...'},
          {icon: '', text: 'Top B Schools in India for Rural Management programme'},
          {icon: '', text: 'Why MDI Gurgaon is most preferred by CAT toppers after IIM A, B, C, L ?'}          
        ]
      },
      { heading: 'News', icon:news, items: [
          {icon: '', text: 'ISB&M Final Placement Report 2017-30% student placed in BFSI Sector'},
          {icon: '', text: 'Average CTC in the operations Space is INR 26.5 LPA at XLRI - Xavier School...'},
          {icon: '', text: '10 Parameters to evaluate before selecting the right Business School'}          
        ]
      } 
    ]
    return (
      <div className="App">
        <Header />
        <Slider />
        <div className="blockswrapper">
          <div className="container">
            {this.getAllBlocks(blocks)}                      
          </div>
        </div>
        <div className="tabswrapper">
          <Tabs />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
