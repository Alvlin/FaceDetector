import React, {Component} from 'react';
import Search from './search.png';
import Folder from './folder.png';
import './ImageForm.css';
class ImageForm extends Component{
  render(){
    return(
      <div>
        <p className='f3'> {'Detect a face in your pictures!'} </p>
        <div className='center'>
          <div className='form center pa3 br3 shadow-5'>
            <input className='f4 pa2 w-70 center' type='text' onChange={this.props.onInput}/>
            <button className='w-15 grow f4 ph3 pv2 dib bg-light-blue' onClick={this.props.onSubmit}>
              <img src={Search} alt='Find'/>
            </button>
            <button className='w-15 grow f4 ph3 pv2 dib bg-light-blue' >
              <img src={Folder} alt='Find'/>
            </button>
          </div>
        </div>
      </div>
    );
  }

}

export default ImageForm;
