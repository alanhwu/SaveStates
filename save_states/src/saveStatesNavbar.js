import {Form, FormControl, Navbar} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function saveStatesNavbar(userName){
    return (
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                {/*Links to homescreen*/}
                <Navbar.Brand href="/">SaveStates</Navbar.Brand>
                {/*TODO: implement querying here when the enter key is pressed*/}
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search for Games"
                        classname="me-2"
                        aria-label="Search"
                    />
                    {/*TODO: figure out how to make searching work through the button*/}
                    <Button variant="outline-success">Search</Button>
                </Form>
                <div>
                    {/*Username for the user*/}
                    <Navbar.Text>{userName}</Navbar.Text>
                    {/*Logout button. TODO: need to implement logging out when this button is pressed */}
                    <Button variant="light">Logout</Button>
                </div>
            </Container>
        </Navbar>
    )
}
export default saveStatesNavbar;