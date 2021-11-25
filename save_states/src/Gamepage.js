import portalImage from './images/portal.jpg';
import './Gamepage.css';
import { Link } from "react-router-dom";

//import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';



function Gamepage() {
    let gameName = "Portal"
    return (
        <div className="Gamepage">
            <Link to="/"><Button className="Homepage">Homepage</Button></Link>
             <header className="Gamepage-header">
                <img src={portalImage} className="Game-logo" alt="logo" class="img-thumbnail"/>
            </header>
        </div>
    );
}

export default Gamepage;
