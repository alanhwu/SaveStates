import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Card, ListGroup, Form, FormControl, InputGroup, Navbar} from "react-bootstrap";
import Image from "react-bootstrap/Image";

import './Userpage.css';
import saveStatesNavbar from "./saveStatesNavbar";
import portalImage from './images/portal.jpg';

class Userpage extends Component {

    render() {
        const user = "bob";
        const backlog = ["Minecraft", "Portal", "Terraria"];
        const gameImages = {"Minecraft": portalImage, "Portal": portalImage, "Terraria": portalImage, "Club Penguin": portalImage, "Farm Simulator": portalImage};
        const backlogGames = backlog.map((game) => <ListGroup.Item> <div class={"Userpage-element mb-2"}> {game} </div> <Image src={gameImages[game]} thumbnail fluid /> </ListGroup.Item>);
        const playthroughs = {"Club Penguin": "I was a penguin! It was great!", "Farm Simulator": "I drove a tractor. It was tedious."};
        const friends=["JedJed", "kc", "Jonah", "Gumster", "tuna"]
        const friendList = friends.map((friend) => <ListGroup.Item> <div class={"Userpage-element mb-2"}> {friend} </div> </ListGroup.Item>)

//	const response = fetch('http://localhost:3001/currgame/Gumster');
	//	const data = response.json();

	const myurl = 'http://localhost:3001/currgame/Gumster';
	let currentGame = "asdf";

	fetch(myurl)
	    .then(response => response.json())
	    .then(data => currentGame = data);

        let playthroughHtml = [];
        for (const game in playthroughs) {
            playthroughHtml.push(this.playthroughFunc(game, playthroughs));
        }
        return (
            <Container>
                {saveStatesNavbar("Hi")}
                <div className='Userpage-header'>{user}</div>
		<p>Game in progress: {currentGame} </p>
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
                                <Card.Title class={"mb-3 Userpage-subheader"}>Friends</Card.Title>
                                <ListGroup>
                                    {friendList} {/*TODO: Make clickable to go to a game page*/}
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }

    playthroughFunc(game, gameDir){
        const gameImages = {"Minecraft": portalImage, "Portal": portalImage, "Terraria": portalImage, "Club Penguin": portalImage, "Farm Simulator": portalImage};
        return (
            <ListGroup.Item> <div class = {"Userpage-element mb-2"}> {game} </div>
                <div class={"mb-2"}> {gameDir[game]} </div>
                <Image src={gameImages[game]} thumbnail fluid /> </ListGroup.Item>
        );
    }
}

export default Userpage;
