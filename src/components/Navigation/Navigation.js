import React from 'react'

const Navigation = ({auth,onRouteChange}) => {
  return auth === 'Sign In'
  ?
      <div></div>
  :
    <nav style={{display:'flex', justifyContent:'flex-end'}} onClick={() => onRouteChange('signin','Sign In')}>
      <p className='f3 link dim black underine pa3 pointer'> {auth} </p>
    </nav>
}

export default Navigation;
