import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from './logo.svg';
import './Loginpage.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class LoginPage extends Component {

    render() {
        return (
            <div className="Loginpage">
                <h1 className="">Log In</h1>
                <header className="Loginpage-header">
                    <img src={logo} className="Loginpage-logo" alt="logo" />
                </header>
                <label className="description">Please enter your username and password</label>
                {/* Use placeholder here to show "ghost text". */}
                <div>
                    <input id="username" placeholder="Username" />
                </div>
                <div>
                    <input id="password" type="password" placeholder="Password" />
                </div>
                {/* Needs bind in order to run only on click and not on page load!  */}
                <Button className="login" onClick={this.handleClick.bind(this)}>Log Me In</Button>
            </div>
        );
    }

    // Handles the button click
    handleClick() {
        // Grab the current value of the input field 
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const data = { username, password };
        const options = {
            // It appears that this line tells the program to either post
            // (write) or get (read) from the database.
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        // Add to the database
        fetch('http://localhost:3001/api', options);
    }

}

export default LoginPage;
