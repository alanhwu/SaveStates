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
import './NewEntry.css';
import logo from './logo.svg';
import portalImage from './images/portal.jpg';


function NewEntry(){
    const gameName = "Portal";
    const userName = "VaultBoy101";
    const playthroughName = "1st Playthrough";

    return (
        <Container>
            {/*Navigation bar at the top, contains link to the homepage, search bar and logout button*/}
            {saveStatesNavbar((userName))}
            <Row>
                {/* Make this text bigger */}
                <Col><div class='action'>Adding new entry to: {playthroughName} of game: {gameName}</div></Col>
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
                {/* Date of entry */}
                <Col>
                <Form>
                    <Form.Group className={"NP-DateStart"} controlId={"DateStart"}>
                        <Form.Label>Date: </Form.Label>
                        <FormControl type = {"text"}/>
                    </Form.Group>
                </Form>
                </Col>

                {/* Hours played */}
                <Col>
                <Form>
                    <Form.Group className={"NP-Name"} controlId={"Playthrough Name"}>
                        <Form.Label>Hours played: </Form.Label>
                        <FormControl type = {"text"}/>
                    </Form.Group>
                </Form>
                </Col>

                {/* End of playthrough? */}
                <Col>
                <Form.Check label={"End of playthrough?"} type={"checkbox"}/>
                </Col>
            </Row>

            <br />

            <Row>
                {/* Date of description */}
                <Form>
                    <Form.Group className={"Playthrough description"} controlID={"Description"}>
                        <Form.Label>Entry Description: </Form.Label>
                        <FormControl as={"textarea"} rows={20}/>
                    </Form.Group>
                </Form>
            </Row>

        </Container>
    )
}

export default NewEntry;