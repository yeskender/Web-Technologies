import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import {
    Button,
    Container,
    Segment,
    Visibility
} from 'semantic-ui-react'
import Menu from './Menu'
class App extends Component {
 
 constructor(props) {
        super(props);
        this.state = {
          items: [
            {
              home: 'home',
              about: 'about',
              contact: 'contact'
            }
          ]
        };
  }


  render() {
    const items = this.state.items.map((item) => (
      <Menu
        key={item.id}
        home={item.home}
        about={item.about}
        contact={item.contact}
      />
    ));//a
    return (
      <div id='items'>
        {items}
      </div>
    );
  }
}

export default App;


