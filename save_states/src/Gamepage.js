import portalImage from './images/portal.jpg';
import logo from './images/logo.svg';
import './Gamepage.css';
import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Navbar, Form, FormControl } from 'react-bootstrap'


function Gamepage() {
    let gameName = "Portal" 
    return (
        <Container>
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/">SaveStates</Navbar.Brand>
                <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search for Games"
                    classname="me-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
                </Form>
                <div>
                    <Navbar.Text>VaultBoy101</Navbar.Text>
                    <Button variant="light">Logout</Button>
                </div>
                
            </Container>
        </Navbar>
            <div>
                <Row>
                    <Col>
                        <Image src={portalImage} style={{}}thumbnail/>
                    </Col>
                    <Col>
                        <Row>
                            <Col style={{}}>Rating</Col>
                            <Col style={{}}>Publisher</Col>
                        </Row>
                        <Row>Add to backlog button</Row>
                        <Row>Add new playthrough</Row>
                    </Col>
                    <Col>Table here</Col>
                </Row>
                <Row>Stuff here</Row>
            </div>
            // Get a big form to write reviews in
            //Accordion(maybe?) for user review
        </Container>
    );
}

export default Gamepage;