import React from 'react';
import {Link} from 'react-router-dom';
import Request from 'superagent'
import decode from 'jwt-decode';

export class Profile extends React.Component {
  constructor(props) {
    super();
    
    this.state = {
        name: '',
        email: '',
      user: {},
      cars: []
    };
    //this.logout = this.logout.bind(this);
    }
    

    componentWillMount() {
        let token = localStorage.getItem('id_token');
        this.setState({
        user: decode(token)
        })
            console.log(decode(token).user_id);
            let url = "http://localhost:8003/car/api/v1/profile/" + decode(token).user_id + "/";
            console.log(url);
            Request.get(url).then((response) => {
            let obj = JSON.parse(response.text);
            console.log(obj);
            this.setState ({
                cars: obj
            })
            })
    }

    handleSubmit(event) {
        event.preventDefault();
        let url = "http://localhost:8003/car/api/v1/auth/profile/"
        Request.post(url)
            .type('form')
            .send({name: this.state.username})
            .send({email: this.state.email})
            .then((callback) => {console.log(callback)})    
  }
  render() {
    return(
      <div className="container">
        <h2>Welcome, "{this.state.user.username}"!</h2>
        <h2>{this.state.list}</h2>
        <h2>{this.state.user.email}</h2>

          <div class="button-panel">
            <input type="submit" class="button" title="Log out" value="Log out" onClick={this.logout}></input>
          </div>

          <div className="newCars">
          {this.state.cars.map((car, index) => {
            return (
              <Link to={`/car/${car.id}`} key={car} className="carLink">
                <img src={car.poster_path} alt={`${car.title} poster`} className="imgResponsive" />
                
                <div className="carInfo">
                  <span>{car.release_date}</span>
                  <span>{car.rating} ★</span>

                </div>
                <p className="carTitle">{car.title}</p>
              </Link>
            )
          })}
        </div>

      </div>
    );
  }
}

export default Profile;