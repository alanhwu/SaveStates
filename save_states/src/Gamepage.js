import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Navbar, Form, FormControl, Table } from 'react-bootstrap'
import saveStatesNavbar from "./saveStatesNavbar";

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
