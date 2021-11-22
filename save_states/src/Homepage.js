import logo from './logo.svg';
import './Homepage.css';
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
/*<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
    crossOrigin="anonymous"
/>*/


function Homepage() {
    return (
        <div className="Homepage">
            <h1 className="">Save States</h1>
            <header className="Homepage-header">
                <img src={logo} className="Homepage-logo" alt="logo" />
            </header>
            <label className="Search">Search for a game: </label>
            <input className="Omnibox" value="Find reviews for games" />
            <Link to="/gamepage"><Button className="Go">Go</Button></Link>
        </div>
    );
}

export default Homepage;
