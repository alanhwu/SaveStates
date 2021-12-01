import { React, useState } from 'react';
import {Col, FormControl, InputGroup, Navbar} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";


// for showing the username if the user is logged in
function navigationUser() {
    // if the user is not logged in
    if (localStorage.getItem("user") == null) {
        return;
    }
    else {
        return <Navbar.Brand className="ms-2">
                <Button onClick = {
                    () => {
                    window.location.href="/user?" + localStorage.getItem("user") //userpage.js has not defined userName yet
                    }
                }>Go to your home page</Button>
            </Navbar.Brand>;
    }
}

// for showing the login button if the user is not logged in
// and for showing the logout button if the user is logged in
function navigationButton(){
    let theButton;
    // if the user is not logged in then show login button
    if (localStorage.getItem("user") == null) {
        theButton = <Button href="/login" className="login">Login</Button>;
        // theButton = <Button href="/login" className="login">Login</Button>;
    }
    // TODO: configure logout here
    else {
        theButton = <Button onClick={
            () => {
                localStorage.removeItem("user");
                window.location.href="/";
            }
        } className="logout">Log out</Button>;
    }
    return theButton;
}

// for showing the signup button if the user is not logged in
function navigationSignup(){
    // if the user is not logged in then show sign up button
    if(localStorage.getItem("user") == "") {
        return <Button href="/signup" className="signup">Sign up</Button>;
    }
    else {
        return;
    }
}

function SaveStatesNavbar() {
    let gameQuery = useState("");

    const goToGame = () => {window.location.href="/game?" + gameQuery}

    const onGameChange = (event) => {
        gameQuery = event.target.value;
        console.log(gameQuery);
    }

    const onGameKeyPress = (event) => {
        console.log(event.key)
        if(event.key === "Enter"){
            goToGame()
        }
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                {/*Links to homescreen*/}
                <Navbar.Brand className="ms-2" href="/">SaveStates</Navbar.Brand>
                {/*TODO: implement querying here when the enter key is pressed*/}
                <Col md={5}>
                    <InputGroup className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search for Games"
                            classname="me-2"
                            aria-label="Search"
                            onChange={onGameChange}
                            onKeyPress={onGameKeyPress}
                        />
                        {/*TODO: figure out how to make searching work through the button*/}
                        <Button
                            variant="outline-success"
                            onClick={goToGame}
                        >
                            Search
                        </Button>
                    </InputGroup>
                </Col>
                <Col>
                    {navigationUser(localStorage.getItem("user"))}
                    {navigationSignup(localStorage.getItem("user"))}
                </Col>

                    {/*TODO: INSERT PADDING HERE */}
                <Col>
                    {localStorage.getItem("user")}
                    &nbsp;
                    {navigationButton(localStorage.getItem("user"))}
                </Col>         
            </Container>
        </Navbar>
    )
}

export default SaveStatesNavbar;
