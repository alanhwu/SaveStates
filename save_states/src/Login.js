import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'

function Login() {
    return (
        <Container>
            <div class="Login-homeButton">
                <Button href="/">Homepage</Button>
            </div>
            <div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
            </div>
        </Container>
    );
}

export default Login;
