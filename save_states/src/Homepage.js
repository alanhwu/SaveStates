import logo from './logo.svg';
import './Homepage.css';
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Homepage(){
    return (
        <Container fluid class="mx-auto">
            <div className="Homepage">
                <h1>SaveStates</h1>
                <Link to="/login"><Button className="Login">Login</Button></Link>
                <Button className="Sign out">Sign out</Button>
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
