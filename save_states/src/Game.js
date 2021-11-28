import React, { Component } from 'react';
import {useParams} from "react-router-dom";
import saveStatesNavbar from "./saveStatesNavbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Card, ListGroup, Table} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import portalImage from "./images/portal.jpg";
import Button from "react-bootstrap/Button";

export default function Game(){

    const params = useParams();

    let gameName = "Portal";
    let userName = "VaultBoy101";
    let rating = 9.33;
    let publisher = "Valve";
    return (
        <Container>
            {/*Navigation bar at the top, contains link to the homepage, search bar and logout button*/}
            {saveStatesNavbar((userName))}
            {/*Header for the name*/}
            <div class = 'Gamepage-header'>{params.gameName}</div>
            <div>
                <Row>
                    <Col>
                        {/*TODO: figure out how change the src image depending on the game*/}
                        {/*Stupid idea: maybe we'll need to import every picture and just do an if statement?*/}
                        <Image src={portalImage} thumbnail/>
                    </Col>
                    <Col>
                        <Row>
                            <Col><div class="Gamepage-text">Rating: {rating}</div></Col>
                            <Col><div class="Gamepage-text">Publisher: {publisher}</div></Col>
                        </Row>
                        {/*TODO: Figure out how to add to the backlog through this button. Probably need to be its own seperate page*/}
                        <Row><Button variant="primary">Add to backlog</Button></Row>
                        {/*TODO: Figure out how to add a new playthrough through this button. Probably need to be its own seperate page*/}
                        <Row className='mt-1'><Button variant="primary">Add new playthrough</Button></Row>
                        {/*TODO: Figure out how to edit current playthroughs through this button. Probably need to be its own seperate page*/}
                        <Row className='mt-1'><Button variant="primary">Edit current playthroughs</Button></Row>
                        <Row>
                            <div class="Gamepage-text">Your playthroughs</div>
                            {/*TODO: Figure out how to make this dynamic: IE how to add multiple tables and rows depending on how many entries there are*/}
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
            {/*Divide for User Reviews*/}
            {/*TODO: figure out how to output different reviews based on which game we are looking at*/}
            <div>
                <div class="Gamepage-reviewHeader">User reviews:</div>
                <div class="Gamepage-review">Insert fake reviews here</div>
            </div>
        </Container>
    );
};

function playthroughFunc(game, gameDir){
    const gameImages = {"Minecraft": portalImage, "Portal": portalImage, "Terraria": portalImage, "Club Penguin": portalImage, "Farm Simulator": portalImage};
    return (
        <ListGroup.Item> <div class = {"Userpage-element mb-2"}> {game} </div>
            <div class={"mb-2"}> {gameDir[game]} </div>
            <Image src={gameImages[game]} thumbnail fluid /> </ListGroup.Item>
    );
}