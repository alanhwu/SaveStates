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

function followUser(follower, username){
    const options = {
        // It appears that this line tells the program to either post
        // (write) or get (read) from the database.
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"follower":follower, "username":username})
    };
    const url = "http://localhost:3001/addfollower";
    fetch(url, options);
}

function Userpage() {
    const currentUser = "Jonah";
    const jonahFollows=["Kyle", "JedJed"];
    const playthroughs = [ "bruh" ];
    const friends = ["JedJed", "kc", "Tuna", "Kyle"];
    const currentGame = "bruh";
    const gameImages = {"Minecraft": portalImage, "Portal": portalImage, "Terraria": portalImage, "Club Penguin": portalImage, "Farm Simulator": portalImage};
    const backlogFunc  = (game) => <ListGroup.Item><div class={"Userpage-element mb-2"}><Link to={"/game?"+game}>{game}</Link></div><Image src={gameImages[game]} thumbnail fluid /></ListGroup.Item>;
    const [state, setState] = useState({
        username: "",
        backlog: [],
        followers:[]
    });
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
    }, []);



    //const backlog = state.backlog;
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
                        <div className={"Userpage-subheader"}><Button className={"mx-auto"} onClick={() => {followUser(state.username, currentUser)}}>Follow</Button></div>
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
            {bigFollowButton(state.username, currentUser, state.followers)}
            <Row className={"mb-5"}>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                Status
                            </Card.Title>
                            {state.userStatus}
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
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title class={"mb-3 Userpage-subheader"}>Backlog</Card.Title>
                            <ListGroup>
                                {
                                   // backlogList
                                    //backlog.map(backlogGames)}
                                    state.backlog.map(backlogFunc) /*TODO: Make clickable to go to a game page*/
                                }
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title class={"mb-3 Userpage-subheader"}>Diary</Card.Title>
                            <ListGroup>
                                {playthroughHtml} {/*TODO: Make clickable to go to a game page*/}
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
