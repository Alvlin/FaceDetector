import React, {Component} from 'react'
class Navigation extends Component{
  render(){
    return(
      <nav style={{display:'flex', justifyContent:'flex-end'}}>
        <p className='f3 link dim black underine pa3 pointer'> Sign in </p>
      </nav>
    );
  }
}
export default Navigation;
