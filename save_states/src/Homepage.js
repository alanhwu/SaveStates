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
// show the sign out button if the user is logged in
function loginButton(userName) {
    // if the user is not logged in, show log in button
    if (localStorage.getItem("user") == null) {
        return <Button href="login" className="login">Login</Button>;
    }
    // if the user is logged in, show logout button
    // TODO: figure out logging out
    return <Button onClick={
        () => {
            localStorage.removeItem("user");
            window.location.href="/";
        }
    } className="logout">Logout</Button>

}

function signupButton(userName) {
    // if the user is not logged in, DO show signup button
    if (userName == null) {
        return <Button href="signup" className="signup">Signup</Button>
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
    const goToGame = () => {window.location.href="/game?" + gameQuery}

    const onGameKeypress = (event) => {
        if(event.key === "Enter"){
            goToGame()
        }
    }

    const goToUser = () => {window.location.href="/user?" + userQuery}

    const onUserChange = (event) => {
        userQuery = event.target.value;
    }

    const onUserKeypress = (event) => {
        if(event.key === "Enter"){
            goToUser()
        }
    }
    
    // TODO: figure out how to get the userName of the user here
    var loggedin;
    if (localStorage.getItem("user") == null) {
        loggedin = "Please login or sign up!";
    } else {
        loggedin = "Hello " + localStorage.getItem("user") + "!";
    }
    
    return (
        <Container fluid class="mx-auto">
            <div className="Homepage">
                <h1>SaveStates</h1>
		<h2>{loggedin}</h2>
                <Row>
                    <Col/>
                    <Col md={"auto"}>
                        {loginButton(localStorage.getItem("user"))}
                    </Col>
                    <Col md={"auto"}>
                        {signupButton(localStorage.getItem("user"))}
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
                                onKeyPress={onGameKeypress}
                            />
                            {/*TODO: figure out how to send get requests through this button*/}
                            <Button
                                variant="outline-success"
                                id="button-addon2"
                                class="btn btn-primary"
                                onClick={goToGame}
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
                                onKeyPress={onUserKeypress}
                            />
                            {/*TODO: figure out how to send get requests through this button*/}
                                <Button
                                    variant="outline-success"
                                    id="button-addon2"
                                    class="btn btn-primary"
                                    onClick={goToUser}
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
