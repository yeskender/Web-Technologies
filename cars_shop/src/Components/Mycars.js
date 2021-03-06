import React, {Component} from 'react'
import Car from '../Components/Car.js'

class Mycars extends React.Component {
  constructor(props) {
    super (props);
  }

  handleCartItemDeleted = (id) => {
    this.props.onCartItemDeleted(id);
  }

  render() {
    var arr = [];
      for (var key in this.props.carts) {
      arr.push(this.props.carts[key]);
    }
    const cartsAPI = arr.map((car, index) => {
      return(
          <div className='ui centered card' key={index}>
            <Car car={car} type="cart" onCartItemDeleted={this.handleCartItemDeleted}/>
          </div>
        );
    });

    return (
      <div className="mycars">
        <div>
        </div>
        <ul> {cartsAPI} </ul>
      </div>
    );
  }
}
export default Mycars;