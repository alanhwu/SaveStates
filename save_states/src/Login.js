import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import { FormControl, InputGroup } from "react-bootstrap";



class Login extends Component{
    render(){
        return(
            <div class="Login-page">
                <Link to = "/"><h1 className="">SaveStates</h1></Link> 
            <div>
                <Form.Group className="Login-username" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" placeholder="Enter username" />
                </Form.Group>
            </div>

            <br />

            <div>
                <Form.Group className="Login-password" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>
            </div>

            <br />

            <Link to = "/user"><Button className="Login-button" onClick={this.handleClick.bind()}>Log In</Button></Link>
                {/* TODO: For now this takes you to the user page but has no effect on the log in status, 
                make it so that it actually logs you in to your own page */}
            </div>
         );
    }
    
    handleClick() {
        // Grab the current value of the input field 
        const username = document.getElementById('formBasicUsername').value;
        const password = document.getElementById('formBasicPassword').value;

        const options = {
            method: 'GET'
        }

        const userinfo = fetch('http://localhost:3001/finduser/' + username);
        console.log(userinfo);
        // TODO: How can we get this to match username/password combo from database?


    }

/* function Login() {
    return (
        <Container>
            <div class="Login-homeButton">
                <Button href="/">Homepage</Button>
            </div>
            <div>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" placeholder="Enter username" />
                </Form.Group>
            </div>
            <div>
                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>
            </div>
        </Container>
    );
} */
}
export default Login;
