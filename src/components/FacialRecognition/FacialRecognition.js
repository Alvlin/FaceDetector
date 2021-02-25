import React from 'react';
import './FacialRecognition.css';

const FacialRecognition = ({outline,imageUrl}) => {
  return(
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputImage'
          alt=""
          src={imageUrl}
          width='500px'
          height='auto'/>
          <div className='bounding-box'
            style={{top:outline.topRow, right:outline.rightCol, bottom:outline.bottomRow, left:outline.leftCol}}>
          </div>
      </div>
    </div>
  );
}

export default FacialRecognition;
