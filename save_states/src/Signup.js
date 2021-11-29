import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from './logo.svg';
import './Signup.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import saveStatesNavbar from "./saveStatesNavbar";

class Signup extends Component {

    render() {
        return (
            <div className="signup-page">
                <Link to = "/"><h1 className="">SaveStates</h1></Link> {/* Import Jonah's navbar & make navbar so 
                it accounts for guests*/}
                <header className="Signup-flavortext">
                    <label>Create a New Character</label>
                </header>
		<br />
		<label className="Description">Create a username and secure password</label>
                {/* Use placeholder here to show "ghost text". */}
                <div>
                    <input id="username" placeholder="Username" />
                </div>
                <br />
                <div>
                    <input id="password" type="password" placeholder="Password" />
                </div>
                <br />
                {/* Needs bind in order to run only on click and not on page load!  */}
                <Link to = "/user"><Button className="signup" onClick={this.handleClick.bind()}>Create Account</Button></Link>
                {/* TODO: For now this takes you to the user page but has no effect on the log in status, 
                make it so that it actually logs you in to your own page */}
            </div>
        );
    }

    // Handles the button click
    handleClick() {
        // Grab the current value of the input field 
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const data = { username, password }; // Add more data here
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

export default Signup;
