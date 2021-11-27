import './Userpage.css';
//import { Link } from "react-router-dom";
import saveStatesNavbar from "./saveStatesNavbar";

import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Form, FormControl, InputGroup, Navbar} from "react-bootstrap";

function Userpage() {
    return (
        <div className="User">
            {saveStatesNavbar("Hi")}
            <h1>USER PAGE</h1>
        </div>
    );
}

export default Userpage;
