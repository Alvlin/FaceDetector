import React, {Component} from 'react';

class SignIn extends Component{
  constructor(props){
    super(props);
    this.state= {
      email: '',
      password: '',
    }
  }
  onEmailChange = (e) => {
    this.setState({email: e.target.value});
  }
  onPasswordChange = (e) => {
    this.setState({password: e.target.value});
  }

  onEnter = (e) => {
    if(e.key === 'Enter') {
      this.onSubmit();
    }
  }
  onSubmit = () => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
    .then(res => res.json())
    .then(data => {
      if(data === 'FAIL'){
        alert('Error Logging In');
      }else{
        this.props.onUserChange(data);
        this.props.onRouteChange('home','Sign Out');
      }
    });
  }

  render(){
    const { onRouteChange } = this.props;
    return(
      <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0" >Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" onChange= {this.onEmailChange} onKeyPress={this.onEnter}/>
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password" >Password</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" onChange={this.onPasswordChange} onKeyPress={this.onEnter}/>
              </div>
            </fieldset>
            <div className="">
              <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" onClick={this.onSubmit}/>
            </div>
            <div className="lh-copy mt3">
              <p onClick={() => onRouteChange('register','Sign In')}href="#0" className="f6 link dim black db pointer">Register</p>
            </div>
          </div>
        </main>
      </article>
    );
  }
}
export default SignIn;
