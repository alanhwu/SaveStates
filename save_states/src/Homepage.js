import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormControl, InputGroup } from "react-bootstrap";

import './Homepage.css';
import logo from './logo.svg';

// show the login button if the user is not logged in
// show the signout button if the user is logged in
function loginButton(userName) {
    // if the user is not logged in, show log in button
    if(userName == ""){
        return <Button href="login" className="login">Login</Button>;
    }
    // if the user is logged in, show logout button
    // TODO: figure out logging out
    return <Button href="logout" className="logout">Logout</Button>

}

function signupButton(userName) {
    // if the user is not logged in, DO show signup button
    if(userName == ""){
        return <Button href="signup" className="signup">Sign Up</Button>
    }
    // if the user is logged in, do not show anything
    return;
}
function Homepage(props) {

    let gameQuery = useState("");
    let userQuery = useState("");

    const onGameChange = (event) => {
        gameQuery = event.target.value;
    }

    const onUserChange = (event) => {
        userQuery = event.target.value;
    }

    // TODO: figure out how to get the userName of the user here
    const userName = "";

    return (
        <Container fluid class="mx-auto">
            <div className="Homepage">
                <h1>SaveStates</h1>
                <br /> <br />
                <h1>Player One Start</h1>
                <br />
                <Row>
                    <Col/>
                    <Col md={"auto"}>
                        <label className='flavortext'>Select</label>
                        <br />
                        {loginButton(userName)}
                    </Col>
                    <Col md={"auto"}>
                        <label className='flavortext'>Start</label>
                        <br />
                        {signupButton(userName)}
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
