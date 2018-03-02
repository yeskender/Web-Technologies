import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './App.css'

class MainMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: true,
            isActive: true,
        };
            this.ClickHandle = this.ClickHandle.bind(this);

    }

    onMenuItemClick = (e, {name}) => {
        this.setState({activeItem: name})
    };

    ClickHandle(){
        this.setState({
            isActive: !this.state.isActive
        });
    }

    render() {
        const {activeItem} = this.state;
        return (
           <div>
            <button onClick = {this.ClickHandle}>{this.state.isActive ? "On" : "Off"}</button>
            <button onClick = {this.ClickHandle}>{this.props.about}</button>
            <button onClick = {this.ClickHandle}>{this.props.contact}</button>
           </div>
        );
    }
}

export default MainMenu;