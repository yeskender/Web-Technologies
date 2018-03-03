import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: true,
      isActive2: true,
      isActive3: true,
    }
  }

  changeColorHome() {
    this.setState({isActive: !this.state.isActive})
  }
  changeColorAbout() {
    this.setState({isActive2: !this.state.isActive2})
  }
  changeColorContacts() {
    this.setState({isActive3: !this.state.isActive3})
  }
  render() {
    let bgColor = this.state.isActive ? "white" : "lightblue"
    let bgColor2 = this.state.isActive2 ? "white" : "lightblue"
    let bgColor3 = this.state.isActive3 ? "white" : "lightblue"
    return (
      <div>
        <h1 className="navbar">My Navigation Bar</h1>
        <button className="button1" style={{backgroundColor: bgColor}} onClick={this.changeColorHome.bind(this)}>Home</button>
        <button className="button2" style={{backgroundColor: bgColor2}} onClick={this.changeColorAbout.bind(this)}>About</button>
        <button className="button3" style={{backgroundColor: bgColor3}} onClick={this.changeColorContacts.bind(this)}>Contacts</button>
      </div>
    )
  }
}

export default App;
