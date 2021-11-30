import {Col, FormControl, InputGroup, Navbar} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function navigationUser(userName){
    // if the user is not logged in
    if(userName == "") {
        return;
    }
    else {
        return <Navbar.Text>{userName}</Navbar.Text>;
    }
}

function navigationButton(userName){
    let theButton;
    // if the user is not logged in
    if(userName == "") {
        theButton = <Button href="/login" className="login">Login</Button>;
    }
    // TODO: configure logout here
    else {
        theButton = <Button href="/logout" className="logout">Log out</Button>;
    }
    return theButton;
}

function saveStatesNavbar(userName){
    return (
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                {/*Links to homescreen*/}
                <Navbar.Brand className="ms-2" href="/">SaveStates</Navbar.Brand>
                {/*TODO: implement querying here when the enter key is pressed*/}
                <Col md={5}>
                    <InputGroup className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search for Games"
                            classname="me-2"
                            aria-label="Search"
                        />
                        {/*TODO: figure out how to make searching work through the button*/}
                        <Button variant="outline-success">Search</Button>
                    </InputGroup>
                </Col>
                <div>
                    {navigationUser(userName)}
                    {navigationButton(userName)}
                </div>
            </Container>
        </Navbar>
    )
}
export default saveStatesNavbar;