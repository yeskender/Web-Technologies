import React, {Component} from 'react'

import Car from '../Components/Car.js'
import Request from 'superagent'


class Catalog extends React.Component {

  constructor(props) {
    super (props);

    this.state = {
      cars: {},
      editFormOpen: false,
    }
    this.state.cars = this.props.cars;
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
  
  handleEditClick = () => {
    this.openForm();
  }

  openForm = () => {
    this.setState({
      editFormOpen: true,
    })
  };

  handleFormClose = () => {
    this.closeForm();
  };

  closeForm = () => {
    this.setState({
      editFormOpen: false,
    })
  };

  handleSearched = (text) => {
    var arr = [];
      for (var key in this.state.cars) {
      arr.push(this.state.cars[key]);
    }
    console.log(arr);
    let newArray = arr.filter ( item => {
      return item.title.toLowerCase().indexOf(text.toLowerCase()) >= 0 ||
        item.cost.toLowerCase().indexOf(text.toLowerCase()) >= 0
        item.img_path.toLowerCase().indexOf(text.toLowerCase()) >= 0
    })
      var rv = {};
      for (var i = 0; i < newArray.length; ++i)
        rv[i] = newArray[i];
    this.setState ({
      cars: rv
    })
    console.log(this.state.cars);
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
  }

  render() {
    
    var arr = [];
      for (var key in this.state.cars) {
      arr.push(this.state.cars[key]);
    }
    
    const timersAPI = arr.map((car, index) => {
      return(
          <div className='ui centered card' key={index}>
            <Car car={car} type="car" 
            onCartItemAdded={this.handleCartItemAdded}
            onCarItemDeleted={this.handleCarItemDeleted}
            key={car.id}
            id={car.id}
            title={car.title}
            cost={car.cost}
            img_path={car.img_path}
            onFormSubmit={this.props.onFormSubmit}
            />
          </div>
        );
    });
    console.log(this.state.cars);
    return (
      
      <div className="catalog">
      <div><SearchBar onSearched={this.handleSearched}/></div>
        <div className="catalog-side-bar">
        </div>
        <ul className="catalog-list"> {timersAPI} </ul>
      </div>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: '',
    }

  }

  handleInputChange = (e) => {
    this.setState({inputText: e.target.value});
  }

  handleIconClick = () => {
    this.props.onSearched(this.state.inputText);
  }

  handleKeyPress = (event)=> {
    this.handleIconClick();
  }

  render() {
    return (
      <div className="ui category search">
        <div className="ui icon input">
          <span>
            <i
              onClick={this.handleIconClick}>
            </i>
          </span>
          <input
            className="prompt"
            type="text"
            value={this.state.inputText}
            onChange={this.handleInputChange}
            placeholder="title of car"
            onKeyPress={this.handleKeyPress}/>
          <i class="search icon"></i>
        </div>
      </div>
    );
  }

}

export default Catalog;