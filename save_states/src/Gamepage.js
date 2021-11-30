import React, { Component, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Navbar, Form, FormControl, Table, Modal} from 'react-bootstrap'
import saveStatesNavbar from "./saveStatesNavbar";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Gamepage.css';
import logo from './logo.svg';
import portalImage from './images/portal.jpg';

// Entry class
// Will end up needing an array of Entries
class Entry {
    constructor(user, game, name, date, body)
    {
        this.user = user;
        this.game = game;
        this.name = name;
        this.date = date;
        this.body = body;
    }
}

function RenderTable(entries) {
    let indexClicked = 0;
    const[show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Table striped bordered hover variant="dark">
                <tbody>
                    {entries.map((entry, index) => 
                        <tr>
                            <td>{entry.user}</td>
                            <td>{entry.name}</td>
                            <td>{entry.date}</td>
                            <td>
                                <Button variant="primary" onClick={handleShow}>
                                    Open description
                                </Button>
                            </td>
                         </tr>
                        )}
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{entries[indexClicked].name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{entries[indexClicked].body}</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </tbody>
        </Table>
    )
}

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

    const[show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let ratingOptions = [1,2,3,4,5,6,7,8,9,10];
    let ratingButtons = ratingOptions.map((option) =>
        <Form.Check inline label={option} name={"ratingCheckbox"} type={"radio"}/>
    )

    const entry1 = new Entry("Kyle", "Mario", "Entry 1", "11/16/21", "Mario is pretty cool");
    const entry2 = new Entry("jedjed", "Mario", "Starting mario!", "11/30/2021", "I love cappy!");
    const entry3 = new Entry("VaultBoy101", "Fallout 76", "Thoughts on Fallout 76", "10/22/2021", "I don't really like this game");

    // TODO: find a way to populate the variable entries with entry classes
    const entries = [entry1, entry2, entry3];
    const renderTableComponent = RenderTable(entries)

    return (
        <Container>
            {/*Navigation bar at the top, contains link to the homepage, search bar and logout button*/}
            {saveStatesNavbar((userName))}
            {/*Header for the name*/}
            <div class = 'Gamepage-header'>{state.Name}</div>
            <div>
                <Row>
                    <Col>
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
                        <Row className='mt-1'><Button variant="primary" onClick={handleShow}>Add new playthrough</Button></Row>
                        <Modal show={show} onHide={handleClose} size={"lg"}>
                            <Modal.Body>
                                <Container>
                                    {/*saveStatesNavbar(userName)*/}
                                    <div className={"Gamepage-reviewHeader m-3"}>Add a playthrough</div>
                                    <Form>
                                        <Form.Control plaintext readOnly defaultValue={"Star rating"} className={"ms-3 Gamepage-text"} />
                                        <div key={'inline-checkbox'} className="m-3 Gamepage-text">
                                            {ratingButtons}
                                        </div>
                                        <Form.Group className={"m-3 Gamepage-text"} controlId={"reviewForm.reviewTitle«"}>
                                            <Form.Label>Title</Form.Label>
                                            <Form.Control type={"text"} />
                                        </Form.Group>
                                        <Form.Group className={"m-3 Gamepage-text"} controlId="reviewForm.mainText">
                                            <Form.Label>Review</Form.Label>
                                            <Form.Control as={"textarea"} rows={9} placeholder={"Review of "+gameName}/>
                                        </Form.Group>
                                        <Form.Check label={"This review contains spoilers"} type={"checkbox"} className={"m-3 Gamepage-text"}/>
                                    </Form>
                                </Container>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button type="submit" className="m-3 Gamepage-text btn-primary">
                                    Submit
                                </Button>
                                <Button onClick={handleClose}> Close </Button>
                            </Modal.Footer>
                        </Modal>
                        <Row>
                        <div class="Gamepage-text">User playthroughs</div>
                        {renderTableComponent}
                        </Row>
                    </Col>
                </Row>
            </div>

            {/*Divide for User Reviews*/}
            {/*TODO: figure out how to output different reviews based on which game we are looking at*/}
            {/*
                 <div>
                 <div class="Gamepage-reviewHeader">User reviews:</div>
                 <div class="Gamepage-review">Insert fake reviews here</div>
                </div>
            */
            }
        </Container>
    );
}

export default Gamepage;
