import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormControl, InputGroup } from "react-bootstrap";

import './Homepage.css';
import logo from './logo.svg';

function Homepage(props) {

    let gameQuery = useState("");
    let userQuery = useState("");

    const onGameChange = (event) => {
        gameQuery = event.target.value;
    }

    const onUserChange = (event) => {
        userQuery = event.target.value;
        console.log("/user?" + userQuery);
    }

    return (
        <Container fluid class="mx-auto">
            <div className="Homepage">
                <h1>SaveStates</h1>
                <Row>
                    <Col/>
                    <Col md={"auto"}>
                        <Link to="/login"><Button className="Login">Login</Button></Link>
                    </Col>
                    {/*TODO: figure out how to sign out with the button*/}
                    <Col md={"auto"}>
                        <Button className="Sign Up">Sign out</Button>
                    </Col>
                    <Col/>
                </Row>
                <Row>
                    <Col md={2}/>
                    <Col className={"mx-auto"}>
                        {/*TODO: figure out how to send get requests through this search bar*/}
                        <InputGroup className=" mt-3 mb-3">
                            <FormControl
                                id="gamesearch"
                                placeholder="Search for Games"
                                aria-label="Search for Games"
                                aria-describedby="basic-addon2"
                                onChange={onGameChange}
                            />
                            {/*TODO: figure out how to send get requests through this button*/}
                            <Button variant="outline-success" id="button-addon2" class="btn btn-primary">
                                Search
                            </Button>
                        </InputGroup>
                        {/*Search for users*/}
                        <InputGroup className=" mt-3 mb-3">
                            <FormControl
                                id="usersearch"
                                placeholder="Search for Users"
                                aria-label="Search for Users"
                                aria-describedby="basic-addon2"
                                onChange={onUserChange}
                            />
                            {/*TODO: figure out how to send get requests through this button*/}
                                <Button
                                    variant="outline-success"
                                    id="button-addon2"
                                    class="btn btn-primary"
                                    onClick={() => {window.location.href="/user?" + userQuery}}
                                >
                                    Search
                                </Button>
                        </InputGroup>
                    </Col>
                    <Col md={2}/>
                </Row>
            </div>
        </Container>
    );
}

// Handles the search button for users
function searchGames() {
    // Grab the current value of the input field 
    const query = document.getElementById('gamesearch').value;
    const options = {
        // It appears that this line tells the program to either post
        // (write) or get (read) from the database.
        method: 'GET',
    };
    // Add to the database
    fetch('http://localhost:3001/findgame/' + query, options);
}

// Handles the search button for users
function searchUsers(username) {
    window.location.href = "localhost3000/user?" + username;
}

export default Homepage;
