import React from 'react'
import Logo from '../Logo/Logo';

const Navigation = ({auth,onRouteChange}) => {
  return auth === 'Sign In'
  ?
      <div></div>
  :
    <nav style={{display:'flex', justifyContent:'flex-end'}} onClick={() => onRouteChange('signin','Sign In')}>
      <Logo/>
      <p className='fl w-80'></p>
      <p className='fl w-10 f3 link dim black underine pa3 pointer'> {auth} </p>
    </nav>
}

export default Navigation;
