import React from 'react';
import {Link} from 'react-router-dom';
import Request from 'superagent';
import decode from 'jwt-decode';
import App from '../App.js'


var info = '';
export class Login2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {users: [],username: '', id: '',email: '', password: '', confirm_password: '',
    info:'', signed: false,};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loggedIn = this.loggedIn.bind(this);
  }

  componentDidMount() {

  }
  
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    this.setState ({signed: true});
    event.preventDefault();
    let url = "http://localhost:8003/api-token-auth/"
      Request.post(url)
          .type('form')
          .send({username: this.state.username})
          .send({password: this.state.password})
          .then(res => {
            console.log(res);
            console.log(res.body.token);
            localStorage.setItem('id_token', res.body.token);
        })
  }

    loggedIn() {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken() // GEtting token from localstorage
        return !!token && !this.isTokenExpired(token) // handwaiving here
    }

    handleSign = () => {
    }


  render() {
    if (this.state.signed == false) {
        return(
        <div className="ui centered card">
            <h1>Sign In</h1>
            <form className="ui form" onSubmit={this.handleSubmit}>

                <div>
                    <label for="username"></label>
                    <input type="text" id="username" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} required autocomplete="off"></input>
                </div>

                <div>
                    <label for="password"></label>
                    <input type="password"  id="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required autocomplete="off"></input>
                </div>

                <div>
                    <button className="ui button" type="submit">Submit</button>
                </div>

            </form>
                <div>
                    <a class="header" href="/signup">Sign up</a>
                </div>
            <h>{this.state.info}</h>
        </div>
        );
    }
    else {
        return (
          <div>
            <App as={Link} to="/catalog" username={this.state.username} password={this.state.password}/>
          </div>
        );
      }
  }
}

export default Login2;