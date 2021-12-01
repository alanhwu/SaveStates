import React, { Component, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Navbar, Form, FormControl, Table, Modal} from 'react-bootstrap'
import saveStatesNavbar from "./saveStatesNavbar";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Gamepage.css';
import logo from './logo.svg';
import portalImage from './images/portal.jpg';

function RenderTable(entries) {
    const[indexClicked, setIndexClicked] = useState(0);
    const[show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    if(entries.length != 0)
    {
        return (
            <Table striped bordered hover variant="dark">
                    <tbody>
                        <tr>
                            <th>User</th>
                            <th>Entry Name</th>
                            <th>Date</th>
                            <th>Review</th>
                            <th>Description</th>
                        </tr>
                        {entries.map((entry, index) => 
                            <tr>
                                <td>{entry.user}</td>
                                <td>{entry.entryName}</td>
                                <td>{entry.date}</td>
                                <td>{entry.entryRating}</td>
                                <td>
                                    <Button variant="primary" onClick={() => {setIndexClicked(index); handleShow();}}>
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
    return(
        <Table striped bordered hover variant="dark">
        <tbody>
            <tr>
                <td>
                    No one is playing this game, be the first to play it!
                </td>
            </tr>
        </tbody>
        </Table>
    )
}

function Gamepage() {
    {/* Figure out what to get from here */}
    

    let entryName = useState("");
    let entryDate = useState("");
    let entryRating = useState("");
    let entryDescription = useState("");

    const onTitleChange = (event) => {
        entryName = event.target.value;
        console.log(entryName)
    }

    const onDateChange = (event) => {
        entryDate = event.target.value;
        console.log(entryDate);
    } 

    const onDescriptionChange = (event) => {
        entryDescription = event.target.value;
        console.log(entryDescription);
    }

    const onRatingChange = (event) => {
        entryRating = event.target.value;
        console.log("hi!")
    }

    const [state, setState] = useState({
        Name: "",
        CoverArt: "",
        AverageRating: -1,
        Genre: "",
        ReleaseDate: "",
        Publisher: ""
    });

    const [userState, setUserState] = useState({
        backlog: []
    })

    const [ gameState, setGameState ] = useState({
        games: []
    });

    const gameName = state.Name;
    const userName = localStorage.getItem("user") || "Anonymous";
    const rating = state.AverageRating;
    const publisher = state.Publisher;
    {/* Today's date */}
    var today = new Date();
    var day = String(today.getDate());
    var month = String(today.getMonth() + 1);
    var year = today.getFullYear();
    var curDate = month + "/" + day + "/" + year;

    const location = useLocation();
    {/* This code grabs the json from the database and stores it in state. */}
    useEffect(() => {
        const myurl = 'http://localhost:3001/findgame/' + location.search.substring(1, location.search.length);
        console.log(myurl);
        fetch(myurl)
            .then(response => response.json())
            .then(data => {
                setState(data[0]);
            })
    }, []);
    {/* This code grabs the json from the database and stores it in user state. */}
    useEffect(() => {
        const myurl = 'http://localhost:3001/finduser/' + userName;
        console.log(myurl);
        fetch(myurl)
            .then(response => response.json())
            .then(data => {
                setUserState({
                    backlog: data[0].backlog
                });
            })
    }, []);

    {/* This code grabs the review JSONs and stores them in the gameState. */}
    
    useEffect(() => {
        const myurl = 'http://localhost:3001/findreviewgame/' + location.search.substring(1, location.search.length);
        fetch(myurl)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setGameState({
                    games: data
                })
            })
            .catch((err) => {console.log(err)})
    }, []);

    const renderTableComponent = RenderTable(gameState.games);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let ratingOptions = [1,2,3,4,5,6,7,8,9,10];
    let ratingButtons = ratingOptions.map((option) =>
        <Form.Check inline label={option} name={"ratingCheckbox"} type={"radio"} controlId={"reviewForm.reviewRating"}/>

    )

    
    function addToBacklog(user, game){
        let data = { "username": user, "game": game };
        const options = {
            // It appears that this line tells the program to either post
            // (write) or get (read) from the database.
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        fetch("http://localhost:3001/addtobacklog", options)
            .then(() => {
                window.location.href="/game?" + game;
            })
        /*setState({
            ...state,
            userStatus: status
        });*/
    }

    function removeFromBacklog(user, game){
        let data = { "username": user, "game": game };
        const options = {
            // It appears that this line tells the program to either post
            // (write) or get (read) from the database.
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        fetch("http://localhost:3001/removefrombacklog", options)
            .then(() => {
                window.location.href="/game?" + game;
            })
        /*setState({
            ...state,
            userStatus: status
        });*/
    }

    function addNewEntry(user, game, entryRating, entryName, entryDate, entryDescription){
        let entryData = {"user":user, "game":game, "entryRating":entryRating, "entryName":entryName, "date":entryDate, 
    "description":entryDescription};
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(entryData)
        };
        handleClose()
        fetch("http://localhost:3001/addreview", options)
            .then(() => {
                window.location.href="/game?" + game;
            })
    }

    function getBacklogButton(user, game) {
        for (let i = 0; i < userState.backlog.length; i++) {
            if (userState.backlog[i] == game) {
        return(
            <Button variant="primary" onClick={() => removeFromBacklog(user, game)}>Remove from backlog</Button>
        )
            }
        }
                return(
                    <Button variant="primary" onClick={() => addToBacklog(user, game)}>Add to backlog</Button>
                )
    }

    return (
        <Container>
            {/*Navigation bar at the top, contains link to the homepage, search bar and logout button*/}
            {saveStatesNavbar((userName))}
            {/*Header for the name*/}
            <div class = 'Gamepage-header'>{state.Name}</div>
            <div>
                <Row>
                    <Col>
                        <Image src={state.CoverArt} thumbnail/>
                    </Col>
                    <Col>
                        <Row>
                            <Col><div class="Gamepage-text">Rating: {state.AverageRating}</div></Col>
                            <Col><div class="Gamepage-text">Publisher: {state.Publisher}</div></Col>
                        </Row>
                        {/*TODO: Figure out how to add to the backlog through this button. Probably need to be its own seperate page*/}
                        <Row>{getBacklogButton(userName, state.Name)}</Row>
                        {/*TODO: Figure out how to add a new playthrough through this button. Probably need to be its own seperate page*/}
                        <Row className='mt-1'><Button variant="primary" onClick={handleShow}>Add new entry</Button></Row>
                        <Modal show={show} onHide={handleClose} size={"lg"}>
                            <Modal.Body>
                                <Container>
                                    {/*saveStatesNavbar(userName)*/}
                                    <div className={"Gamepage-reviewHeader m-3"}>Add a new entry to: {gameName}</div>
                                    <Form>
                                      {/*  <Form.Control plaintext readOnly defaultValue={"Star rating"} className={"ms-3 Gamepage-text"} 
                                        onChange={onRatingChange}/>
                                        <div key={'inline-checkbox'} className="m-3 Gamepage-text">
                                        {ratingButtons} */}
 

                                        <Row>
                                        <Col>
                                        <Form.Group className={"m-3 Gamepage-text"} controlId={"reviewForm.reviewTitle"}
                                        onChange={onTitleChange}>
                                            <Form.Label>Name of Entry</Form.Label>
                                            <Form.Control type={"text"} placeholder={"Entry name"}/>
                                        </Form.Group>
                                        </Col>

                                        <Col>
                                        <Form.Group className={"m-3 Gamepage-text"} controlId={"reviewForm.reviewDate"}
                                        onChange={onDateChange}>
                                            <Form.Label>Date of Entry</Form.Label>
                                            <Form.Control type={"text"} placeholder={curDate}/>
                                        </Form.Group>
                                        </Col>

                                        <Col>
                                        <Form.Group className={"m-3 Gamepage-text"} controlId={"reviewForm.reviewTitle"}
                                        onChange={onRatingChange}>
                                            <Form.Label>Rating</Form.Label>
                                            <Form.Control type={"text"} placeholder={"Ex: out of 100, out of 10"}/>
                                        </Form.Group>
                                        </Col>
                                        </Row>

                                        <Form.Group className={"m-3 Gamepage-text"} controlId={"reviewForm.mainText"}
                                        >
                                            <Form.Label>Description of Entry</Form.Label>
                                            <Form.Control as={"textarea"} rows={9} placeholder={"Describe what you did in " + gameName + 
                                        " and your thoughts on them"}  onChange={onDescriptionChange}/>
                                        </Form.Group>
                                        {/*<Form.Check label={"This entry contains spoilers"} type={"checkbox"} className={"m-3 Gamepage-text"}/>*/}
                                    </Form>
                                </Container>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button type="submit" className="m-3 Gamepage-text btn-primary"
                                    onClick={() => addNewEntry(userName, gameName, entryRating, entryName, entryDate, entryDescription)}>
                                    Submit
                                </Button>
                                <Button onClick={handleClose}> Close </Button>
                            </Modal.Footer>
                        </Modal>

                        <Row>

                        <div class="Gamepage-text">User playthroughs</div>
                        {renderTableComponent}
                        </Row>
                    </Col>
                </Row>
            </div>

            {/*Divide for User Reviews*/}
            {/*TODO: figure out how to output different reviews based on which game we are looking at*/}
            {/*
                 <div>
                 <div class="Gamepage-reviewHeader">User reviews:</div>
                 <div class="Gamepage-review">Insert fake reviews here</div>
                </div>
            */
            }
        </Container>
    );
}

export default Gamepage;
