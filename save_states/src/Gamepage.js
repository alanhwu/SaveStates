import portalImage from './images/portal.jpg';
import './Gamepage.css';
import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Gamepage() {
    let gameName = "Portal"
    return (
        <Container>
            <div className="Gamepage">
                <Link to="/"><Button className="Homepage">Homepage</Button></Link>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src={portalImage} thumbnail />
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default Gamepage;
