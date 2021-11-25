import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from './logo.svg';
import './Homepage.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class HomePage extends Component {

    render() {
        return (
            <div className="homepage">
                <h1 className="">Save States</h1>
                <header className="homepage-header">
                    <img src={logo} className="homepage-logo" alt="logo" />
                </header>
                <label className="search">Search for a game: </label>
                <input id="omnibox" placeholder="Find reviews for games" />
                <Button className="search" onClick={this.handleClick.bind(this)}>Go</Button>
                <Link to="/loginpage"><Button className="login">Sign me in!</Button></Link>
            </div>
        );
    }

    // Handles the button click
    handleClick() {
        // Grab the current value of the input field 
        const query = document.getElementById('omnibox').value;
        const options = {
            // It appears that this line tells the program to either post
            // (write) or get (read) from the database.
            method: 'GET',
        };
        // Add to the database
        fetch('http://localhost:3001/findgame/' + query, options);
    }

}

export default HomePage;
