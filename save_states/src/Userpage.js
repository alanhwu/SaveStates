import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Card, ListGroup, Form, FormControl, InputGroup, Navbar} from "react-bootstrap";
import Image from "react-bootstrap/Image";

import './Userpage.css';
import saveStatesNavbar from "./saveStatesNavbar";
import portalImage from './images/portal.jpg';



function Userpage() {
    const currentUser = "Jonah";
    const jonahFollows=["Kyle", "JedJed"];
    const playthroughs = [ "bruh" ];
    const friends = ["JedJed", "kc", "Tuna", "Kyle"];
    const currentGame = "bruh";
    const backlog = ["Minecraft", "Portal", "Terraria"];
    const gameImages = {"Minecraft": portalImage, "Portal": portalImage, "Terraria": portalImage, "Club Penguin": portalImage, "Farm Simulator": portalImage};
    const backlogGames = backlog.map((game) => <ListGroup.Item> <div class={"Userpage-element mb-2"}> {game} </div> <Image src={gameImages[game]} thumbnail fluid /> </ListGroup.Item>);
    const [state, setState] = useState("");
    const location = useLocation();
    {/* This code grabs the json from the database and stores it in state. */}
    useEffect(() => {
        const myurl = 'http://localhost:3001/finduser/' + location.search.substring(1, location.search.length);
        fetch(myurl)
            .then(response => response.json())
            .then(data => {
                setState(data[0]);
            })
        console.log(state);
    });

    function friendItem(friend, currFollowers){
        if (currFollowers.includes(friend)) {
            return <Link to={"/user?" + friend}><ListGroup.Item>{friend}</ListGroup.Item></Link>
        }
        else{
            return (<ListGroup.Item><Link to={"/user?" + friend}>{friend}</Link><Button className={"ms-4"}>+</Button></ListGroup.Item>)
        }
    }
    function bigFollowButton(userPage, currUser, currUserFollowers){
        if(userPage === currUser){
            return;
        }
        else if(currUserFollowers.includes(userPage)){
            return(
                <Row>
                    <Col />
                    <Col xl={5}>
                        <div className={"Userpage-subheader"}><Button className={"mx-auto"}>Unfollow</Button></div>
                    </Col>
                    <Col />
                </Row>
            )
        }
        else{
            return(
                <Row>
                    <Col />
                    <Col xl={5}>
                        <div className={"Userpage-subheader"}><Button className={"mx-auto"}>Follow</Button></div>
                    </Col>
                    <Col />
                </Row>
            )
        }
    }


//	const response = fetch('http://localhost:3001/currgame/Gumster');
	//	const data = response.json();
    let playthroughHtml = [];
    for (const game in playthroughs) {
        playthroughHtml.push(playthroughFunc(game, playthroughs));
    }
    return (
        <Container>
            {saveStatesNavbar(currentUser)}
            <div className='Userpage-header'>{state.username}</div>
            {bigFollowButton(state.username, currentUser, jonahFollows)}
            <p>Game in progress: {state.game} </p>
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
                                {friends.map((friend) => friendItem(friend, jonahFollows))} {/*TODO: Make clickable to go to a game page*/}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );

}

function playthroughFunc(game, gameDir){
    const gameImages = {"Minecraft": portalImage, "Portal": portalImage, "Terraria": portalImage, "Club Penguin": portalImage, "Farm Simulator": portalImage};
    return (
        <ListGroup.Item> <div class = {"Userpage-element mb-2"}> {game} </div>
            <div class={"mb-2"}> {gameDir[game]} </div>
            <Image src={gameImages[game]} thumbnail fluid /> </ListGroup.Item>
    );
}

export default Userpage;
