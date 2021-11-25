import './Homepage.css';
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FormControl} from "react-bootstrap";
import {InputGroup} from "react-bootstrap";
function Homepage(){
    return (
        <Container fluid class="mx-auto">
            <div className="Homepage">
                <h1>SaveStates</h1>
                <Link to="/login"><Button className="Login">Login</Button></Link>
                <Button className="Sign out">Sign out</Button>
                <Row>
                    <Col md={2}/>
                    <Col className={"mx-auto"}>
                        <InputGroup className=" mt-3 mb-3">
                            <FormControl
                                placeholder="Recipient's username"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-secondary" id="button-addon2" class="btn btn-primary">
                                Button
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
