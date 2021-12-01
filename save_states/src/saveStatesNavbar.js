import { React, useState } from 'react';
import {Col, FormControl, InputGroup, Navbar} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";


// for showing the username if the user is logged in
function navigationUser(userName){
    // if the user is not logged in
    if(userName == "") {
        return;
    }
    else {
        return <Navbar.Text>{userName}</Navbar.Text>;
    }
}

// for showing the login button if the user is not logged in
// and for showing the logout button if the user is logged in
function navigationButton(userName){
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
function navigationSignup(userName){
    // if the user is not logged in then show sign up button
    if(userName == "") {
        return <Button href="/signup" className="signup">Sign up</Button>;
    }
    else {
        return;
    }
}

function SaveStatesNavbar(props, userName) {
    //userName ="";
    let gameQuery = useState("");

    const onGameChange = (event) => {
        gameQuery = event.target.value;
        console.log(gameQuery);
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
                        />
                        {/*TODO: figure out how to make searching work through the button*/}
                        <Button
                            variant="outline-success"
                            onClick={() => {window.location.href="/game?" + gameQuery}}
                        >
                            Search
                        </Button>
                    </InputGroup>
                </Col>
                <div>
                    {navigationUser(userName)}
                    {navigationSignup(userName)}
                    {/*TODO: INSERT PADDING HERE */}
                    {localStorage.getItem("user")}
                    &nbsp;
                    {navigationButton(userName)}
                </div>
            </Container>
        </Navbar>
    )
}

export default SaveStatesNavbar;
