import React, { Component, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

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


function Gamepage() {
    {/* Figure out what to get from here */}
    const gameName = "Portal";
    const userName = "VaultBoy101";
    const rating = 9.33;
    const publisher = "Valve";
    const [state, setState] = useState("");
    const location = useLocation();
    {/* This code grabs the json from the database and stores it in state. */}
    useEffect(() => {
        const myurl = 'http://localhost:3001/findgame/' + location.search.substring(1, location.search.length);
        console.log(myurl);
        fetch(myurl)
            .then(response => response.json())
            .then(data => {
                setState(data[0]);
            })
    });

    return (
        <Container>
            {/*Navigation bar at the top, contains link to the homepage, search bar and logout button*/}
            {saveStatesNavbar((userName))}
            {/*Header for the name*/}
            <div class = 'Gamepage-header'>{state.Name}</div>
            <div>
                <Row>
                    <Col>
                    {/*TODO: figure out how change the src image depending on the game*/}
                    {/*Stupid idea: maybe we'll need to import every picture and just do an if statement?*/}
                        <Image src={state.CoverArt} thumbnail/>
                    </Col>
                    <Col>
                        <Row>
                            <Col><div class="Gamepage-text">Rating: {state.AverageRating}</div></Col>
                            <Col><div class="Gamepage-text">Publisher: {state.Publisher}</div></Col>
                        </Row>
                        {/*TODO: Figure out how to add to the backlog through this button. Probably need to be its own seperate page*/}
                        <Row><Button variant="primary">Add to backlog</Button></Row>
                        {/*TODO: Figure out how to add a new playthrough through this button. Probably need to be its own seperate page*/}
                        <Row className='mt-1'><Button variant="primary">Add new playthrough</Button></Row>
                        {/*TODO: Figure out how to edit current playthroughs through this button. Probably need to be its own seperate page*/}
                        <Row className='mt-1'><Button variant="primary">Edit current playthroughs</Button></Row>
                        <Row>
                        <div class="Gamepage-text">Your playthroughs</div>
                        {/*TODO: Figure out how to make this dynamic: IE how to add multiple tables and rows depending on how many entries there are*/}
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
            {/*Divide for User Reviews*/}
            {/*TODO: figure out how to output different reviews based on which game we are looking at*/}
            <div>
                <div class="Gamepage-reviewHeader">User reviews:</div>
                <div class="Gamepage-review">Insert fake reviews here</div>
            </div>
        </Container>
    );
}

export default Gamepage;
