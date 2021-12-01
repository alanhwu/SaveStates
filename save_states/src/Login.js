import { Component, useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import { FormControl, InputGroup } from "react-bootstrap";

function Login() {
    let userQuery = useState("");
    let passwordQuery = useState("");

    const onUserChange = (event) => {
        userQuery = event.target.value;
        console.log(userQuery);
    }

    const onPasswordChange = (event) => {
        passwordQuery = event.target.value;
        console.log(passwordQuery);
    }
    
    return(
        <div class="Login-page">
            <Link to = "/"><h1 className="">SaveStates</h1></Link> 
        <div>
            <Form.Group className="Login-username" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control onChange={onUserChange} type="username" placeholder="Enter username" />
            </Form.Group>
        </div>

        <br />

        <div>
            <Form.Group className="Login-password" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={onPasswordChange} type="password" placeholder="Enter password" />
            </Form.Group>
        </div>

        <br />

        <Button className="Login-button" onClick={() => {
            // Grab the current value of the input field 
            const username = userQuery;
            const password = passwordQuery;
            localStorage.setItem("user", username);

            const userurl = 'http://localhost:3001/finduser/' + username;
            console.log(userurl);
            let correctCredentials = false;

            fetch(userurl)
                .then(response => response.json())
                .then(data => {
                    correctCredentials = (password === data[0].password);
                })
                .then(() => {
                    if (correctCredentials) {
                        localStorage.setItem("user", username);
                    }
                    else {
                        alert("Incorrect password!");
                    }
                })
                .then(() => {
                    if (correctCredentials) {
                        window.location.href="/user?" + username;
                    }
                })
            // TODO: How can we get this to match username/password combo from database?
        }}>Log In</Button>
            {/* TODO: For now this takes you to the user page but has no effect on the log in status, 
            make it so that it actually logs you in to your own page */}
        </div>
        );
}

export default Login;
