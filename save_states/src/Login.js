import { React, useState } from 'react';
import { Link } from "react-router-dom";

import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import { FormControl, InputGroup } from "react-bootstrap";

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
        <div class="Login-page">
            <Link to = "/"><h1 className="">SaveStates</h1></Link> 
        <div>
            <Form.Group className="Login-username" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Enter username" onChange={onUsernameChange} />
            </Form.Group>
        </div>

        <br />

        <div>
            <Form.Group className="Login-password" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" onChange={onPasswordChange} />
            </Form.Group>
        </div>

        <br />

        <Button className="Login-button" onClick={() => {
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
            {/* TODO: For now this takes you to the user page but has no effect on the log in status, 
            make it so that it actually logs you in to your own page */}
        </div>
        );
    
}

export default Login;
