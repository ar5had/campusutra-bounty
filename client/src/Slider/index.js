import React, { Component } from 'react';
import './styles.css';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: ['']
    };
  }
  componentWillMount() {
    this.x = 0;
  }
  componentDidMount() {
    setInterval(()=> {
      this.x += 100;
      let no = this.x % 400;

      document.querySelector('.Slider')
        .style.transform = `translateX(-${no}vw)`
    }, 3000);
      
  }

  render() {
  
    return (
        <div className='Slider'>
          <div>
            <h5>Heading for slide 1</h5>
          </div>
          <div>
            <h5>Heading for slide 2</h5>
          </div>
          <div>
            <h5>Heading for slide 3</h5>
          </div>
          <div>
            <h5>Heading for slide 4</h5>
          </div>          
        </div>
    );
  }
}

export default Slider;
