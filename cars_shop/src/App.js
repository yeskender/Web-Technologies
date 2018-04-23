import React, { Component } from 'react';
import Home from './Components/Home';
import Login from './Components/Login';
import Login2 from './Components/Login2';
import Singup from './Components/Signup';
import Footer from './Components/Footer';
import helpers from './Components/helpers';
import Cars from './Components/Cars';
import Header from './Components/Header.js'
import Request from 'superagent'

import {
    Button,
    Menu,
    Container,
    Segment,
    Visibility,
    Icon
} from 'semantic-ui-react'
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      /*cars: [
        {
          id: helpers.guid(), 
          title: "Lexus ES",
          project: "$38,950", 
          imgPath: "http://www.lexus.com/cm-img/header_images/es.png",
        }, {
          id: helpers.guid(),
          title: "Lexus LS",
          project: "$75,000",
          imgPath: "http://www.lexus.com/cm-img/header_images/ls.png",
        }, {
          id: helpers.guid(),
          title: "Lexus NX",
          project: "$46,640",
          imgPath: "http://www.lexus.com/cm-img/header_images/nx.png",
        },
      ],*/
      username: 'admin',
      password: '1234',

      buttonBadge: 0,
      /*carts: [
            { 
              id: helpers.guid(),
              title: "Lexus ES",
              project: '$38,950', 
              imgPath: 'http://www.lexus.com/cm-img/header_images/es.png',
            }
      ],*/
      feeds: [],

    }
    this.state.username = this.props.username;
    this.state.password = this.props.password;

    console.log (this.state.username);
    console.log (this.state.password);
  }

  componentDidMount() {
    let url = "http://localhost:8003/car/api/v1/car/"
    Request.get(url).then((response) => {
      let obj = JSON.parse(response.text);
      console.log(obj);
      this.setState ({
        cars: obj
      })
    })
    let url2 = "http://localhost:8003/car/api/v1/cart/"
    Request.get(url2).then((response) => {
      let obj = JSON.parse(response.text);
      console.log(obj);
      this.setState ({
        carts: obj
      })
    })
  }

  handleEditFormSubmit = (car) => {
    this.updateTimer(car)
  };

  handleTrashClick = (carId) => {
    this.setState({
      cars: this.props.cars.filter(car => car.id !== carId),
    });
  }

  updateTimer = (newTimer) => {
    const newArr = this.state.cars.map((car) => {
      if (car.id === newTimer.id) {
        return Object.assign({}, car, {
          title: newTimer.title,
          cost: newTimer.cost,
          img_path: newTimer.img_path
        });
      } else {
        return car;
      }
    });
    
    this.setState({
      cars: newArr,
    });
  }
  
  handleCartItemAdded = (cart) => {
    let items = this.state.carts;
    let array = this.state.carts.filter((cur, index) => cur.title.toLowerCase() == cart.title.toLowerCase());
    if (array.length == 0) {
      cart.id = this.state.nextID++;
      items.push(cart);
    }
    this.setState ({carts: items});
  }

  handleCartItemDeleted = (id) => {
    this.setState({
        carts: this.state.carts.filter((cart, index) => cart.id !== id)
      });
  }

  handleCarItemDeleted = (id) => {
    this.setState({
        cars: this.state.cars.filter((car, index) => car.id !== id)
      });
  }

  handleCarItemAdded = (car) => {
    let items = this.state.feeds;
    items.push ({id: car.id, title: car.title, });
    this.setState ({feed: items});
  }
  
  
  render() {
    const {activeItem} = this.state;
    if (!this.state.username || !this.state.password) {
      return (
        <div>
          <Login2/>
          <Singup/>
        </div>
      );
    }
    return (
      <div className="App">
        <div> 
          <Header
          username={this.state.username}/> 
        </div>
        
                <Cars
                  onFormSubmit={this.handleEditFormSubmit}
                  onTrashClick = {this.handleTrashClick}
                  onCarItemAdded={this.handleCarItemAdded}
                  onCarItemDeleted={this.handleCarItemDeleted}
                  onCartItemAdded={this.handleCartItemAdded}
                  onCartItemDeleted={this.handleCartItemDeleted}
                  carts={this.state.carts}
                  cars={this.state.cars}
                  feeds={this.state.feeds}
                />
        <Footer/>
      </div>
    );
  }
}





export default App;
