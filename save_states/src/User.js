import React, { Component } from 'react';
import {Outlet, useParams} from "react-router-dom";
import saveStatesNavbar from "./saveStatesNavbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Card, ListGroup} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import portalImage from "./images/portal.jpg";

export default function User(){

    const user = "bob";
    const backlog = ["Minecraft", "Portal", "Terraria"];
    const gameImages = {"Minecraft": portalImage, "Portal": portalImage, "Terraria": portalImage, "Club Penguin": portalImage, "Farm Simulator": portalImage};
    const backlogGames = backlog.map((game) => <ListGroup.Item> <div class={"Userpage-element mb-2"}> {game} </div> <Image src={gameImages[game]} thumbnail fluid /> </ListGroup.Item>);
    const playthroughs = {"Club Penguin": "I was a penguin! It was great!", "Farm Simulator": "I drove a tractor. It was tedious."};
    const friends=["JedJed", "kc", "Jonah", "Gumster", "tuna"]
    const friendList = friends.map((friend) => <ListGroup.Item> <div class={"Userpage-element mb-2"}> {friend} </div> </ListGroup.Item>)
    let playthroughHtml = [];
    for (const game in playthroughs) {
        playthroughHtml.push(playthroughFunc(game, playthroughs));
    }

    let params = useParams();
    return (
        <Container>
            {saveStatesNavbar("Hi")}
            <div className='Userpage-header'>{params.username}</div>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title class={"mb-3 Userpage-subheader"}>Backlog</Card.Title>
                            <ListGroup>
                                {backlogGames} {/*TODO: Make clickable to go to a game page*/}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title class={"mb-3 Userpage-subheader"}>Playthroughs</Card.Title>
                            <ListGroup>
                                {playthroughHtml} {/*TODO: Make clickable to go to a game page*/}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title class={"mb-3 Userpage-subheader"}>Followers</Card.Title>
                            <ListGroup>
                                {friendList} {/*TODO: Make clickable to go to a game page*/}
                            </ListGroup>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
};

function playthroughFunc(game, gameDir){
    const gameImages = {"Minecraft": portalImage, "Portal": portalImage, "Terraria": portalImage, "Club Penguin": portalImage, "Farm Simulator": portalImage};
    return (
        <ListGroup.Item> <div class = {"Userpage-element mb-2"}> {game} </div>
            <div class={"mb-2"}> {gameDir[game]} </div>
            <Image src={gameImages[game]} thumbnail fluid /> </ListGroup.Item>
    );
}