import { React, useState } from 'react';
import { Link } from "react-router-dom";

import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import SaveStatesNavbar from  "./saveStatesNavbar"
import { Col, Row } from "react-bootstrap";

function Login() {
    
    let username = useState("");
    let inputPassword = useState("");

    const onUsernameChange = (event) => {
        username = event.target.value;
        console.log(username);
    }

    const onPasswordChange = (event) => {
        inputPassword = event.target.value;
        console.log(inputPassword);
    }

    return (
        <div class={"mx-4"}>
            <div class="Login-page">
                {SaveStatesNavbar()}
            <div>
                <Row>
                    <div className="Login-Header">Enter the Dungeon</div>
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
            <Row>
                <Col />
                <Col className={"Login-button"}>
                    <Button onClick={() => {
                        // Grab the current value of the input field
                        const options = {
                            method: 'GET'
                        }

                        // Redirect to your page after you log in
                        fetch('http://localhost:3001/finduser/' + username)
                            .then(response => response.json())
                            .then(data => {
                                if (data.length === 0 || data[0].password != inputPassword) {
                                    alert("Username or password is incorrect! Please try again.");
                                    return null;
                                }
                                localStorage.setItem("user", username);
                                return data;
                            })
                            .then(data => {
                                if (data != null) {
                                    window.location.href="/user?" + data[0].username;
                                }
                            })
                    }}>Log In</Button>
                </Col>
                <Col />
            </Row>
                {/* TODO: For now this takes you to the user page but has no effect on the log in status,
                make it so that it actually logs you in to your own page */}
            </div>
        </div>
        );
    
}

export default Login;
