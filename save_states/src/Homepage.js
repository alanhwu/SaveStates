import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormControl, InputGroup } from "react-bootstrap";

import './Homepage.css';
import logo from './logo.svg';

class Homepage extends Component {

    render() {
        return (
            <Container fluid class="mx-auto">
                <div className="Homepage">
                    <h1>SaveStates</h1>
                    <Link to="/login"><Button className="Login">Login</Button></Link>
                    {/*TODO: figure out how to sign out with the button*/}
                    <Button className="Sign out">Sign out</Button>
                    <Row>
                        <Col md={2}/>
                        <Col className={"mx-auto"}>
                            {/*TODO: figure out how to send get requests through this search bar*/}
                            <InputGroup className=" mt-3 mb-3">
                                <FormControl
                                    id="omnibox"
                                    placeholder="Search for Games"
                                    aria-label="Search for Games"
                                    aria-describedby="basic-addon2"
                                />
                                {/*TODO: figure out how to send get requests through this button*/}
                                <Button variant="outline-secondary" id="button-addon2" class="btn btn-primary" onClick={this.handleClick.bind()}>
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

    // Handles the button click
    handleClick() {
        // Grab the current value of the input field 
        const query = document.getElementById('omnibox').value;
        const options = {
            // It appears that this line tells the program to either post
            // (write) or get (read) from the database.
            method: 'GET',
        };
        // Add to the database
        fetch('http://localhost:3001/findgame/' + query, options);
    }

}

export default Homepage;
