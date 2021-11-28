import {Col, FormControl, InputGroup, Navbar} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

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
                    {/*Username for the user*/}
                    <Navbar.Text>{userName}</Navbar.Text>
                    {/*Logout button. TODO: need to implement logging out when this button is pressed */}
                    <Button className={"ms-3"} variant="light">Logout</Button>
                </div>
            </Container>
        </Navbar>
    )
}
export default saveStatesNavbar;