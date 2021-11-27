import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Navbar, Form, FormControl, Table } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import './Gamepage.css';
import logo from './logo.svg';
import portalImage from './images/portal.jpg';

class Gamepage extends Component {

    render() {
        {/* Figure out what to get from here */}
        let gameName = "Portal"
        let userName = "VaultBoy101"
        let rating = 9.33
        let publisher = "Valve"
        return (
            <Container>
                {/* Navigation bar at the top, contains link to the homepage, search bar and logout button */}
                <Navbar bg="dark" variant="dark">
                    <Container fluid>
                        {/* Links to homescreen */}
                        <Navbar.Brand href="/">SaveStates</Navbar.Brand>
                        {/* TODO: implement querying here when the enter key is pressed */}
                        <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search for Games"
                            classname="me-2"
                            aria-label="Search"
                        />
                        {/* TODO: figure out how to make searching work through the button */}
                        <Button variant="outline-success">Search</Button>
                        </Form>
                        <div>
                            {/* Username for the user */}
                            <Navbar.Text>{userName}</Navbar.Text>
                            {/* Logout button. TODO: need to implement logging out when this button is pressed  */}
                            <Button variant="light">Logout</Button>
                        </div>
                    </Container>
                </Navbar>
                {/* Header for the name */}
                <div class = 'Gamepage-header'>{gameName}</div>
                <div>
                    <Row>
                        <Col>
                        {/* TODO: figure out how change the src image depending on the game */}
                        {/* Stupid idea: maybe we'll need to import every picture and just do an if statement? */}
                            <Image src={portalImage} thumbnail/>
                        </Col>
                        <Col>
                            <Row>
                                <Col><div class="Gamepage-text">Rating: {rating}</div></Col>
                                <Col><div class="Gamepage-text">Publisher: {publisher}</div></Col>
                            </Row>
                            {/* TODO: Figure out how to add to the backlog through this button. Probably need to be its own seperate page */}
                            <Row><Button variant="primary">Add to backlog</Button></Row>
                            {/* TODO: Figure out how to add a new playthrough through this button. Probably need to be its own seperate page */}
                            <Row className='mt-1'><Button variant="primary">Add new playthrough</Button></Row>
                            {/* TODO: Figure out how to edit current playthroughs through this button. Probably need to be its own seperate page */}
                            <Row className='mt-1'><Button variant="primary">Edit current playthroughs</Button></Row>
                            <Row>
                                <div class="Gamepage-text">Your playthroughs</div>
                                {/* TODO: Figure out how to make this dynamic: IE how to add multiple tables and rows depending on how many entries there are */}
                                <Table striped bordered hover variant="dark">
                                    <tbody>
                                        <tr>
                                            <td>Fred</td>
                                            <td>11/20/19 - 12/26/19</td>
                                            <td>Not done</td>
                                        </tr>
                                        <tr>
                                            <td>Kyle</td>
                                            <td>02/16/02 - 11/26/2021</td>
                                            <td>Not done</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Container>
        );
    }

}

export default Gamepage;
