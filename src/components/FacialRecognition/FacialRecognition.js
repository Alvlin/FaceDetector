import React, {Component} from 'react';
import './FacialRecognition.css';

class FacialRecognition extends Component{
  render(){
    const {outline} = this.props;
    return(
      <div className='center ma'>
        <div className='absolute mt2'>
          <img id='inputImage'
            alt="fdimg"
            src={this.props.imageUrl}
            width='500px'
            height='auto'/>
            <div className='bounding-box'
              style={{top:outline.topRow, right:outline.rightCol, bottom:outline.bottomRow, left:outline.leftCol}}>
            </div>
        </div>
      </div>
    );
  }
}
export default FacialRecognition;
