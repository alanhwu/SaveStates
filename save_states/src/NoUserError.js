import React, {Component, useState} from 'react';
import { Link } from "react-router-dom";

import {useParams} from "react-router-dom";
import saveStatesNavbar from "./saveStatesNavbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Modal, ListGroup, Table, Form} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";


export default function UserError(){
    
    const params = useParams();

    let userName = "VaultBoy101";

    return (
        <Container>
            <Link to = "/"><h1 className="">SaveStates</h1></Link> 
            {/*Navigation bar at the top, contains link to the homepage, search bar and logout button*/}
            {/*Header for the name*/}
            <div class = 'Error-header'><h1>Error</h1></div>
            <div class = 'Error-message'><h1>MissingNo</h1></div>
            <div class = 'Description'>User wasn't found. Either their account does
            not exist or there was a typo in your search. Don't forget, usernames are case-sensitive!</div>  
        </Container>
    );
};

