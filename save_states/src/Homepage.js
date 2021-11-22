import logo from './logo.svg';
import './Homepage.css';
import { Link } from "react-router-dom";

function Homepage() {
    return (
        <div className="Homepage">
            <h1 className="">Save States</h1>
            <header className="Homepage-header">
                <img src={logo} className="Homepage-logo" alt="logo" />
            </header>
            <label className="Search">Search for a game: </label>
            <input className="Omnibox" value="Find reviews for games" />
            <Link to="/gamepage"><button className="Go">Go</button></Link>
        </div>
    );
}

export default Homepage;
