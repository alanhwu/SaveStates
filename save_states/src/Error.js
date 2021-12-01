import React, {Component, useState} from 'react';
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

    let gameName = "Portal";
    let userName = "VaultBoy101";

    return (
        <Container>
            {/*Navigation bar at the top, contains link to the homepage, search bar and logout button*/}
            {saveStatesNavbar((userName))}
            {/*Header for the name*/}
            <div class = 'Error-message'><h1>I am Error</h1></div>
            <div class = 'Description'>Something wrong happened, most likely our fault.</div>  
        </Container>
    );
};

