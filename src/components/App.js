import React, {Component} from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navigation from './Navigation/Navigation';
import Logo from './Logo/Logo';
import ImageForm from './ImageForm/ImageForm';
import FacialRecognition from './FacialRecognition/FacialRecognition';
import SignIn from './SignIn/SignIn';
import Register from './Register/Register';

const Clarifai = require('clarifai');
const app = new Clarifai.App({
 apiKey: '03692828a7834d9bbd9affdbd121866f'
});

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
      input:'',
      imageUrl:'',
      outline: {},
      route:'signin',
      auth: 'Sign In',
    }
  }

  getFaceLocation = (data) =>{
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const imgWidth = Number(image.width);
    const imgHeight = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * imgWidth,
      topRow: clarifaiFace.top_row * imgHeight,
      rightCol: imgWidth - (clarifaiFace.right_col * imgWidth),
      bottomRow: imgHeight - (clarifaiFace.bottom_row * imgHeight)
    }
  }

  displayFaceBox = (outline) => {
    this.setState({outline});
  }

  onInput = (event) => {
    this.setState({
      input: event.target.value
    });
  }
  onSubmit = (event) =>{
    this.setState({
      imageUrl: this.state.input
    })
    // send image to the api
    app.models.predict('d02b4508df58432fbb84e800597b8959',this.state.input)
      .then(resp => {
        this.displayFaceBox(this.getFaceLocation(resp));
        })
      .catch(err => console.log("There was an error"));
  }
  onRouteChange = (route,auth) => {
    this.setState({route,auth});
  }
  render(){
    return (
      <div className="App">
        <Particles className='particles' params= {opts}/>
        <Navigation auth={this.state.auth} onRouteChange={this.onRouteChange}/>
        { this.state.route === 'home'
          ? <div>
              <Logo />
              <ImageForm onInput={this.onInput} onSubmit={this.onSubmit}/>
              <FacialRecognition outline={this.state.outline} imageUrl={this.state.imageUrl}/>
            </div>
          : (
              this.state.route === 'signin'
              ? <SignIn onRouteChange={this.onRouteChange}/>
              : <Register onRouteChange={this.onRouteChange}/>
            )

        }
      </div>
    );
  }
}

export default App;
