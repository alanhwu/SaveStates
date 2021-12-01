import React, {Component, useState} from 'react';
import { Link } from "react-router-dom";

import {useParams} from "react-router-dom";
import saveStatesNavbar from "./saveStatesNavbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Modal, ListGroup, Table, Form} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";


export default function GameError(){
    
    const params = useParams();

    return (
        <Container>
            <Link to = "/"><h1 className="">SaveStates</h1></Link> 
            {/*Header for the name*/}
            <div class = 'Error-header'><h1>Error</h1></div>
            <div class = 'Error-message'><h1>Game Over</h1></div>
            <div class = 'Description'>Game wasn't found. Either it's not in our 
            database (we don't have every game) or there was a typo in your search. 
            Don't forget, games are case-sensitive!</div>  
        </Container>
    );
};

