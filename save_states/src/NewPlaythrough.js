import React, { Component, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Navbar, Form, FormControl, Table, Modal} from 'react-bootstrap'
import saveStatesNavbar from "./saveStatesNavbar";

import 'bootstrap/dist/css/bootstrap.min.css';
import './NewPlaythrough.css';
import logo from './logo.svg';
import portalImage from './images/portal.jpg';

function NewPlaythrough(){
    const gameName = "Portal";
    const userName = "VaultBoy101";
    const rating = 9.33;
    const publisher = "Valve";

    return (
        <Container>
            {/*Navigation bar at the top, contains link to the homepage, search bar and logout button*/}
            {saveStatesNavbar((userName))}

            <Row>
                {/* Make this text bigger */}
                <Col><div class='action'>Creating new playthrough: {gameName}</div></Col>
                {/* Move buttons to end of page */}
                <Col>
                <div class='buttons'>
                <Link to="/user"><Button>Add</Button></Link>
                &nbsp;&nbsp;&nbsp;
                <Link to="/user"><Button>Cancel</Button></Link>
                </div>
                </Col>

            </Row>

            <br />

            <Row>
                {/* Date started */}
                <Col>
                <Form>
                    <Form.Group className={"NP-DateStart"} controlId={"DateStart"}>
                        <Form.Label>Date Started: </Form.Label>
                        <FormControl type = {"text"}/>
                    </Form.Group>
                </Form>
                </Col>

                {/* Name of Playthrough */}
                <Col>
                <Form>
                    <Form.Group className={"NP-Name"} controlId={"Playthrough Name"}>
                        <Form.Label>Name of Playthrough: </Form.Label>
                        <FormControl type = {"text"}/>
                    </Form.Group>
                </Form>
                </Col>
            </Row>

            <br />

            <Row>
                {/* Date of description */}
                <Form>
                    <Form.Group className={"Playthrough description"} controlID={"Description"}>
                        <Form.Label>Playthrough Description: </Form.Label>
                        <FormControl as={"textarea"} rows={20}/>
                    </Form.Group>
                </Form>
            </Row>

        </Container>
    )
}

export default NewPlaythrough;
