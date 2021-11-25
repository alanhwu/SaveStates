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
                <input className="omnibox" placeholder="Find reviews for games" />
                <Link to="/gamepage"><Button className="search">Go</Button></Link>
                <Link to="/loginpage"><Button className="login">Sign me in!</Button></Link>
            </div>
        );
    }

}

export default HomePage;
