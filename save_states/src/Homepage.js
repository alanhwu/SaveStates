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
                        <Button className="Sign Up">Sign Up</Button>
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
                            <Button
                                variant="outline-success"
                                id="button-addon2"
                                class="btn btn-primary"
                                onClick={() => {window.location.href="/game?" + gameQuery}}
                            >
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

export default Homepage;
