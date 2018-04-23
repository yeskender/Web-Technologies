import React, {Component} from 'react'

import { BrowserRouter as Hashrouter, Navlink, Route, Switch } from 'react-router-dom'

import Home from '../Components/Home.js'
import Catalog from '../Components/Catalog.js'
import Mycars from '../Components/Mycars.js'
import About from '../Components/About.js'
import Login from '../Components/Login.js'
import Login2 from '../Components/Login2.js'
import EditableCar from '../Components/EditableCar.js'
import Signup from '../Components/Signup.js'
import Profile from '../Components/Profile.js'


class Cars extends React.Component {

  constructor(props) {
    super (props);
  }

  handleCartItemAdded = (cart) => {
    this.props.onCartItemAdded(cart);
  }

  handleCartItemDeleted = (id) => {
    this.props.onCartItemDeleted(id);
  }
  handleCarItemDeleted = (id) => {
    this.props.onCarItemDeleted(id);
  }

  render() {
      return(
        <div className="body">
            <Switch>
            <Route exact path='/' render={props => <Home
                feeds={this.props.feeds}/>}/>
            <Route path='/catalog' render={props => 
              <Catalog
                onFormSubmit={this.props.onFormSubmit}
                onCartItemAdded={this.handleCartItemAdded}
                onCartItemDeleted={this.handleCartItemDeleted}
                onCarItemDeleted={this.handleCarItemDeleted}
                onFormSubmit={this.props.onFormSubmit}
                cars={this.props.cars}
                username={this.props.username}
                carts={this.props.carts}/>}
                />
            <Route path='/mycars' render={props => 
              <Mycars
                onCartItemDeleted={this.props.onCartItemDeleted}
                carts={this.props.carts}/>}/>
            <Route path='/about' render={props => 
              <About
                onCartItemDeleted={this.handleCartItemDeleted}
                carts={this.props.carts}/>}/>
            <Route path='/editablecar' render={props => 
              <EditableCar
                onFormSubmit={this.props.onFormSubmit}
                onTrashClick = {this.props.onTrashClick}
                cars={this.props.cars}/>}/>
            <Route path='/login2' render={props => 
              <Login2
                />}/>
            <Route path='/signup' render={props => 
              <Signup
                />}/>
            <Route path='/profile' render={props => 
              <Profile
            />}/>

          </Switch>

        </div>
      );
  }

}

export default Cars;
