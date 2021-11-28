import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Gamepage.css';
import logo from './logo.svg';
import portalImage from './images/portal.jpg';

class Gamepage extends Component {

    render() {
        {/* Figure out what to get from here */}
        let gameName = "Portal";
        let userName = "VaultBoy101";
        let rating = 9.33;
        let publisher = "Valve";
        return (
            <Container>
                <Outlet />
            </Container>
        );
    }
}

export default Gamepage;
