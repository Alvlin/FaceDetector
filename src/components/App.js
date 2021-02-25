import React, {Component} from 'react';
import './App.css';
import Navigation from './Navigation/Navigation';
import Logo from './Logo/Logo';
import ImageForm from './ImageForm/ImageForm';
import Particles from 'react-particles-js';

const opts = {
  particles: {
    number:{
      value:30,
      density: {
        enable: true,
        value_area: 500
      }
    }
  }
}
class App extends Component {
  constructor(){
    super();
    this.state = {
      image:'',
    }
  }
  onInput = (event) => {
    console.log(event.target.value);
  }
  onSubmit = (event) =>{
    console.log('clicked');
    // send image to the api

  }
  render(){
    return (
      <div className="App">

        <Particles className='particles' params= {opts}/>
        <Navigation />
        <Logo />
        <ImageForm onInput={this.onInput} onSubmit={this.onSubmit}/>
        {/*
        <FacialRecognition />*/}
      </div>
    );
  }
}

export default App;
