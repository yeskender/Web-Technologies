import React, { Component } from 'react';
import './App.css';
import {
    Button,
    Menu,
    Container,
    Segment,
    Visibility
} from 'semantic-ui-react'
class App extends Component {


  render() {
    return (
      <div className="ui centered card">
          <div className="content">
            <div className="header">Calculator</div>
            <form className="ui form">
              <div className="field">
                <input type="number" name="calc" placeholder="0" disabled></input>
              </div>
            </form>
          </div>
          <div className="content">
          <div className="row">
            <button className="large ui inverted blue button">=</button>
            <button className="large ui inverted blue button">?</button>
            <button className="large ui inverted blue button">%</button>
            <button className="large ui inverted orange button">/</button>
          </div>
          <div className="row">
            <button className="large ui inverted blue button">7</button>
            <button className="large ui inverted blue button">8</button>
            <button className="large ui inverted blue button">9</button>
            <button className="large ui inverted orange button">*</button>
          </div>
          <div className="row">
            <button className="large ui inverted blue button">4</button>
            <button className="large ui inverted blue button">5</button>
            <button className="large ui inverted blue button">6</button>
            <button className="large ui inverted orange button">-</button>
          </div>
          <div className="row">
            <button className="large ui inverted blue button">1</button>
            <button className="large ui inverted blue button">2</button>
            <button className="large ui inverted blue button">3</button>
            <button className="large ui inverted orange button">+</button>
          </div>
          </div>
      </div>
    );
  }
}

export default App;
