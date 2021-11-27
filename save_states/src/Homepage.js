import './Homepage.css';
import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Form, FormControl, InputGroup, Navbar} from "react-bootstrap";
function Homepage(){
    return (
        <Container fluid class="mx-auto">
            <div className="Homepage">
                <h1 class={"Homepage-header"}>SaveStates</h1>
                <div className="col-xs-12"/>
                <Row>
                    <Col/>
                    <Col md={"auto"}>
                        <Link to="/login"><Button className="Login">Login</Button></Link>
                    </Col>
                    {/*TODO: figure out how to sign out with the button*/}
                    <Col md={"auto"}>
                        <Button className="Sign Up">Sign out</Button>
                    </Col>
                    <Col/>
                </Row>
                <Row className={"col-mt-3"}>
                    <Col md={2}/>
                    <Col className={"mx-auto"}>
                        {/*TODO: figure out how to send get requests through this search bar*/}
                        <InputGroup className=" mt-3 mb-3">
                            <FormControl
                                placeholder="Search for Games"
                                aria-label="Search for Games"
                                aria-describedby="basic-addon2"
                            />
                            {/*TODO: figure out how to send get requests through this button*/}
                            <Button variant="outline-secondary" id="button-addon2" class="btn btn-outline-light">
                                Search
                            </Button>
                        </InputGroup>
                    </Col>
                    <Col md={2}/>
                </Row>
            </div>
        </Container>
    )
}

/*
function Homepage() {
    return (
        <div className="Homepage">
            <h1 className="">Save States</h1>
            <header className="Homepage-header">
                <img src={logo} className="Homepage-logo" alt="logo" />
            </header>
            <label className="Search">Search for a game: </label>
            <input className="Omnibox" value="Find reviews for games" />
            <Link to="/gamepage"><Button className="Go">Go</Button></Link>
        </div>
    );
}*/


export default Homepage;
