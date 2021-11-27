import portalImage from './images/portal.jpg';
import logo from './images/logo.svg';
import './Gamepage.css';
import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Navbar, Form, FormControl, Table } from 'react-bootstrap'


function Gamepage() {
    let gameName = "Portal"
    let userName = "VaultBoy101"
    let rating = 9.33
    let publisher = "Valve"
    return (
        <Container>
            {/*Navigation bar*/}
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                {/*Linkts to homescreen*/}
                <Navbar.Brand href="/">SaveStates</Navbar.Brand>
                {/*Search bar, will need to implenment querying here*/}
                <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search for Games"
                    classname="me-2"
                    aria-label="Search"
                />
                {/*Button for the search bar, will need to implement querying here too */}
                <Button variant="outline-success">Search</Button>
                </Form>
                <div>
                    {/*Username for the user*/}
                    <Navbar.Text>{userName}</Navbar.Text>
                    {/*Logout button, will need to implement this feature here */}
                    <Button variant="light">Logout</Button>
                </div>
            </Container>
        </Navbar>
            <div class = 'Gamepage-header'>{gameName}</div>
            <div>
                <Row>
                    <Col>
                        <Image src={portalImage} thumbnail/>
                    </Col>
                    <Col>
                        <Row>
                            <Col><div class="Gamepage-text">Rating: {rating}</div></Col>
                            <Col><div class="Gamepage-text">Publisher: {publisher}</div></Col>
                        </Row>
                        <Row><Button variant="primary">Add to backlog</Button></Row>
                        <Row className='mt-1'><Button variant="primary">Add new playthrough</Button></Row>
                        <Row className='mt-1'><Button variant="primary">Edit current playthroughs</Button></Row>
                        <Row>
                        <div class="Gamepage-text">Your playthroughs</div>
                        <Table striped bordered hover variant="dark">
                            <tbody>
                                <tr>
                                    <td>Fred</td>
                                    <td>11/20/19 - 12/26/19</td>
                                    <td>Not done</td>
                                </tr>
                                <tr>
                                    <td>Kyle</td>
                                    <td>02/16/02 - 11/26/2021</td>
                                    <td>Not done</td>
                                </tr>
                            </tbody>
                        </Table>
                        </Row>
                    </Col>
                </Row>
            </div>
            <div>
                <div class="Gamepage-reviewHeader">User reviews:</div>
                <div class = "Gamepage-review">Insert fake reviews here</div>
            </div>
        </Container>
    );
}

export default Gamepage;