import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Card, ListGroup, Form, FormControl, InputGroup, Navbar, Table, Modal} from "react-bootstrap";
import Image from "react-bootstrap/Image";

import './Userpage.css';
import saveStatesNavbar from "./saveStatesNavbar";
import portalImage from './images/portal.jpg';

class Entry {
    constructor(game, entryName, entryRating, description)
    {
        this.game = game;
        this.entryName = entryName;
        this.entryRating = entryRating
        this.description = description
    }
}

function Userpage() {
    const currentUser = localStorage.getItem("user");
    const jonahFollows=["Kyle", "jedjed"];
    const playthroughs = [ "bruh" ];
    const currentGame = "bruh";
    const gameImages = {"Minecraft": portalImage, "Portal": portalImage, "Terraria": portalImage, "Club Penguin": portalImage, "Farm Simulator": portalImage};
    const backlogFunc  = (game) => <ListGroup.Item> <div class={"Userpage-element mb-2"}> <Link to={"/game?"+game}> {game} </Link></div></ListGroup.Item>;
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

    function bigFollowButton(){
	let included = false;
	let currUser = localStorage.getItem("user");
	for (let i = 0; i < state.followers.length; i++) {
		if (state.followers[i] == currUser) {
			included = true;
			break;
		}
	}
        if (state.username === currUser) {
            return;
        }
        else if (included) {
            return(
                <Row>
                    <Col />
                    <Col xl={5}>
                        <div className={"Userpage-subheader"}><Button className={"mx-auto"} onClick={() => {
									  unfollowUser(currentUser, state.username);
									  window.location.href="/user?" + state.username;
								      }}>Unfollow</Button></div>
                    </Col>
                    <Col />
                </Row>
            )
        }
        else {
            return(
                <Row>
                    <Col />
                    <Col xl={5}>
                        <div className={"Userpage-subheader"}><Button className={"mx-auto"} onClick={() => {
									  followUser(currentUser, state.username);
									  window.location.href="/user?" + state.username;
								      }}>Follow</Button></div>
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

    const entry1 = new Entry("Zelda", "BOTW stuff", "9", "IM WAITING FOR BOTW 2");
    const entry2 = new Entry("Mario", "Odyssey stuff", "9", "IM WAITING FOR SMO2");
    const entry3 = new Entry("Pokemon", "I hate it here", "0", "Just replay the old games stupid");
    
    // const entries  [];
    const [ reviewState, setReviewState ] = useState({
        reviews: []
    });
    useEffect(() => {
        const myurl = 'http://localhost:3001/findreviewuser/' + location.search.substring(1, location.search.length);
        console.log(myurl);
        fetch(myurl)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setReviewState({
                    reviews: data
                })
            })
            .catch((err) => {console.log(err)})
    }, []);

    
    function RenderTable(entries)
    {
        const[indexClicked, setIndexClicked] = useState(0);
        const[show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        if(entries.length == 0)
        {
            return(
                <Table striped bordered hover variant="dark">
                    <tbody>
                        <tr>
                            <td>
                                This user is not playing any games (for some reason)
                            </td>
                        </tr>
                </tbody>
        </Table>)
        }
        return(
            <Table striped bordered hover variant="dark">
                    <tbody>
                        {entries.map((entry, index) => 
                        <tr>
                            <td>Game: {entry.game}</td>
                            <td>Entry Name: {entry.entryName}</td>
                            <td>Rating: {entry.entryRating}</td>
                            <td><Button variant="primary" onClick={() => {setIndexClicked(index); handleShow();}}>
                                        Open description
                                </Button>
                            </td>
                        </tr>
                        )}
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>{entries[indexClicked].entryName}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>{entries[indexClicked].description}</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </tbody>
            </Table>
        )
    }

    const renderTableComponent = RenderTable(reviewState.reviews);

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
                            <Card.Title class={"mb-3 Userpage-subheader"}>Followers</Card.Title>
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
                            {renderTableComponent}
                        </ListGroup>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );

}

export default Userpage;