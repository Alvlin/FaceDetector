import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import face from './face.png';

const Logo = () => {
  return(
    <div className = 'fl w-10 ma3 mt2'>
      <Tilt className='Tilt br2 shadow-2' options={{max:55}} style={{ height: 100, width: 100 }}>
        <div className='Tilt-inner pa2'>
          <img src={face} alt='img' />
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;
