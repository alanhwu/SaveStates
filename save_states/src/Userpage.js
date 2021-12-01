import React, { useState, useEffect } from 'react';
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
    const currentUser = localStorage.getItem("user");
    console.log(currentUser);
    const jonahFollows=["Kyle", "jedjed"];
    const playthroughs = [ "bruh" ];
    const currentGame = "bruh";
    const gameImages = {"Minecraft": portalImage, "Portal": portalImage, "Terraria": portalImage, "Club Penguin": portalImage, "Farm Simulator": portalImage};
    const backlogFunc  = (game) => <ListGroup.Item> <div class={"Userpage-element mb-2"}> <Link to={"/game?"+game}> {game} </Link></div>< /ListGroup.Item>;
    const [state, setState] = useState({
        username: "",
        password: "",
        userStatus: "",
        followers: [],
        backlog: [],
        library: [],
        gameNames: [],
        gameArt: []
    });

    const location = useLocation();
    const currUser = "currUser";
    {/* This code grabs the json from the database and stores it in state. */}
    useEffect(() => {
        const myurl = 'http://localhost:3001/finduser/' + location.search.substring(1, location.search.length);
        const getData = async () => {
            const data = await fetch(myurl)
                .then(response => response.json())
                .then(data => {
                    return data[0];
                })
            console.log(data);
            setState({
                ...state,
                username: data.username,
                library: data.library,
                userStatus: data.userStatus,
                followers: data.followers,
                backlog: data.backlog
            });
            // .catch(console.log("Error user not found"));

            for (let i = 0; i < state.library.length; i++) {
                let gameurl = 'http://localhost:3001/findgame/' + state.library[i];
                console.log(gameurl);
                const data = await fetch(gameurl)
                    .then(response => response.json())
                    .then(data => {
                    const updatedGameNames = state.gameNames.slice();
                    const updatedGameArt = state.gameArt.slice();
                    console.log(i + ": " + state.gameNames);
                    console.log("name: " + data[0].Name);
                    updatedGameNames.push(data[0].Name);
                    console.log(updatedGameNames);
                    updatedGameArt.push(data[0].CoverArt);
                    setState({
                        ...state,
                        gameNames: updatedGameNames,
                        gameArt: updatedGameArt
                    });
                })
            }
        }

        getData();
    }, []);


    console.log(state);

    const backlogList = state.backlog.map(backlogFunc);
    function friendItem(friend, currFollowers){
        if (currFollowers.includes(friend)) {
            return <a href={"/user?" + friend}><ListGroup.Item>{friend}</ListGroup.Item></a>
        }
        else{
            return (<ListGroup.Item>{friend}<Button className={"ms-4"}>+</Button></ListGroup.Item>)
        }
    }

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

    function unfollowUser(follower, username){
        const options = {
            // It appears that this line tells the program to either post
            // (write) or get (read) from the database.
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"follower":follower, "username":username})
        };
        const url = "http://localhost:3001/removefollower";
        fetch(url, options);
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
                        <div className={"Userpage-subheader"}><Button className={"mx-auto"} onClick={() => {unfollowUser(state.username, currentUser)}}>Unfollow</Button></div>
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

    let statusQuery = useState("");
    const onStatusChange = (event) => {
        statusQuery = event.target.value;
    }
    function setStatusUI(loggedInuser){
        if(loggedInuser === state.username){
            return(
                <InputGroup className=" mt-3 mb-3">
                    <FormControl
                        id="updatestatus"
                        placeholder="Update your status"
                        aria-label="Update your status"
                        aria-describedby="basic-addon2"
                        onChange={onStatusChange}
                    />
                    {/*TODO: figure out how to send get requests through this button*/}
                    <Button
                        variant="outline-primary"
                        id="button-addon2"
                        class="btn btn-primary"
                        onClick={() => setStatus(statusQuery)}
                    >
                        Update
                    </Button>
                </InputGroup>
            )
        }
    }

    function setStatus(status){
        let data = {"username":state.username, "userStatus":status};
        const options = {
            // It appears that this line tells the program to either post
            // (write) or get (read) from the database.
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        fetch("http://localhost:3001/changestatus", options)
        setState({
            ...state,
            userStatus: status
        });
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
            <Row className={"mb-5"}>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                Status
                            </Card.Title>
                            {state.userStatus}
                            {setStatusUI(currentUser)}
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title class={"mb-3 Userpage-subheader"}>Follows</Card.Title>
                            <ListGroup>
                                {state.followers.map((friend) => friendItem(friend, state.followers))} {/*TODO: Make clickable to go to a game page*/}
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
                            <Card.Title class={"mb-3 Userpage-subheader"}>Playthroughs</Card.Title>
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
