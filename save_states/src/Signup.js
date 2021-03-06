import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import logo from './logo.svg';
import './Signup.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Col, Form, Row} from "react-bootstrap";
import saveStatesNavbar from "./saveStatesNavbar";

function Signup() {

    let username = useState("");
    let password = useState("");
    let passwordCheck = useState("");
    const [state, setState] = useState("");
    const location = useLocation();

    const onUsernameChange = (event) => {
        username = event.target.value;
        console.log(username);
    }

    const onPasswordChange = (event) => {
        password = event.target.value;
        console.log(password);
    }

    const onPasswordCheckChange = (event) => {
        passwordCheck = event.target.value;
        console.log(passwordCheck);
    }

    return (
        <div className="signup-page">
            {saveStatesNavbar()}
            <header className="Signup-flavortext mt-3">
                <label>Create a New Character</label>
            </header>
            <br />
            <label className="Description mb-4">Create a username and secure password</label>
            {/* Use placeholder here to show "ghost text". */}
            <div>
                <Row>
                    <Col />
                    <Col md={4}>
                        <Form.Group className="Login-username mt-3" controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" placeholder="Enter username" onChange={onUsernameChange} />
                        </Form.Group>
                    </Col>
                    <Col />
                </Row>
            </div>
            <br />
            <div>
                <Row>
                    <Col />
                    <Col md={4}>
                        <Form.Group className="Login-password" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" onChange={onPasswordChange} />
                        </Form.Group>
                    </Col>
                    <Col />
                </Row>
            </div>
            <br />
            <div>
                <Row>
                    <Col />
                    <Col md={4}>
                        <Form.Group className="Login-password" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" onChange={onPasswordCheckChange} />
                        </Form.Group>
                    </Col>
                    <Col />
                </Row>
            </div>
            <br />
            {/* Needs bind in order to run only on click and not on page load!  */}
            <Button className="signup" onClick={() => {
                console.log("handling click");
                if (password !== passwordCheck) {
                    alert("The two passwords are not the same. Try again");
                    return;
                }
                else {
                    console.log("Inside the else part");
                    const followers = [];
                    const backlog = [];
                    const entries = [];
                    const library = [];
                    const userStatus = "";
                    const data = { username, password, followers, backlog, entries, library, userStatus }; // Add more data here, configure passwordCheck here
                    console.log(data);
                    localStorage.setItem("user", username);
                    const options = {
                        // It appears that this line tells the program to either post
                        // (write) or get (read) from the database.
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    };

                    // Add to the database and reroute to their page
                    fetch('http://localhost:3001/adduser', options)
                        .then(response => response.json())
                        .then(data => {
                            window.location.href = "/user?" + username;
                        })
                }
            }}>Create Account</Button>
            {/* TODO: For now this takes you to the user page but has no effect on the log in status, 
            make it so that it actually logs you in to your own page */}
        </div>
    );

}

export default Signup;
