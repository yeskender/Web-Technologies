import React from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom'

import Request from 'superagent';

export class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {users: [], username: '', email: '', password: '',confirm_password: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
    
  componentDidMount() {
    
  }
  
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleChange2(event) {
    this.setState({ [event.target.name]: event.target.value });
   
      if(event.target.value != this.state.password) {
      event.target.setCustomValidity("Passwords Don't Match");
      }
      else{
        event.target.setCustomValidity("");
      }
  }

  handleSubmit(event) {
    event.preventDefault();
    let url = "http://localhost:8003/car/api/v1/auth/join/"
      Request.post(url)
          .type('form')
          .send({username: this.state.username})
          .send({password1: this.state.password})
          .send({password2: this.state.password})
          .send({email: this.state.email})
          .then((callback) => {console.log(callback)})    
  }

  render() {
    return(
      <div className="ui centered card">
       <div>
          <h1>Join Us</h1>
          <form  className="ui form" onSubmit={this.handleSubmit}>
            <div>
              <label for="email"></label>
              <input type="email" id="email" name="email"  placeholder="Email Address" value={this.state.email} onChange={this.handleChange} required autocomplete="off"></input>
            </div>
            <div>
              <label for="username"></label>
              <input type="text" id="username" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} required autocomplete="off"></input>
            </div>

            <div>
              <label for="password"></label>
              <input type="password"  id="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required autocomplete="off"></input>
            </div>

            <div>
              <label for="confirm_password"></label>
              <input type="password"  id="confirm_password" name="confirm_password" placeholder="Confirm password" value={this.state.confirm_password} onChange={this.handleChange2} required ></input>
            </div>
            <div class="button-panel">
              <button className="ui button"
                type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>

    );
  }
}

export default Signup;