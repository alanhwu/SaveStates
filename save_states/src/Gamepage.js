import logo from './logo.svg';
import './Gamepage.css';
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
/*<link
rel="stylesheet"
href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
crossOrigin="anonymous"
    />*/


function Gamepage() {
    return (
        <div className="Gamepage">
            <Link to="/"><Button className="Back">Back</Button></Link>
            <h1 className="">This is the other page</h1>
            <header className="Gamepage-header">
                <img src={logo} className="Gamepage-logo" alt="logo" />
            </header>
            <label className="Search">Search for a game: </label>
            <input className="Omnibox" value="Find reviews for games" />
        </div>
    );
}

export default Gamepage;
