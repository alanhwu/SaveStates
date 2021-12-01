import React, {Component, useState} from 'react';
import { Link } from "react-router-dom";

import {useParams} from "react-router-dom";
import saveStatesNavbar from "./saveStatesNavbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Modal, ListGroup, Table, Form} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import portalImage from "./images/portal.jpg";
import Button from "react-bootstrap/Button";


export default function Error(){
    
    const params = useParams();

    return (
        <Container>
            <Link to = "/"><h1 className="">SaveStates</h1></Link> 
            {/*Navigation bar at the top, contains link to the homepage, search bar and logout button*/}
            {/*Header for the name*/}
            <div class = 'Error-message'><h1>I am Error</h1></div>
            <div class = 'Description'>Something wrong happened, most likely our fault.</div>  
        </Container>
    );
};

