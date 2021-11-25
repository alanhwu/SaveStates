import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from './logo.svg';
import './Gamepage.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class GamePage extends Component {

    render() {
        return (
            <div className="gamepage">
                <Link to="/"><Button className="back">Back</Button></Link>
                <h1 className="">This is the other page</h1>
                <header className="gamepage-header">
                    <img src={logo} className="gamepage-logo" alt="logo" />
                </header>
                <label className="search">Search for a game: </label>
                <input className="omnibox" placeholder="Find reviews for games" />
            </div>
        );
    }

}

export default GamePage;
