import './Homepage.css';
import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FormControl, InputGroup} from "react-bootstrap";
function Homepage(){
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
                                placeholder="Search for Games"
                                aria-label="Search for Games"
                                aria-describedby="basic-addon2"
                            />
                            {/*TODO: figure out how to send get requests through this button*/}
                            <Button variant="outline-secondary" id="button-addon2" class="btn btn-primary">
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
