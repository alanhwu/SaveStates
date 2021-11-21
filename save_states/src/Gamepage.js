import logo from './logo.svg';
import './Gamepage.css';

function Gamepage() {
    return (
        <div className="Gamepage">
            <h1 className="">This is the other page</h1>
            <header className="Gamepage-header">
                <img src={logo} className="Gamepage-logo" alt="logo" />
            </header>
            <label className="Search">Search for a game: </label>
            <input className="Omnibox" value="Find reviews for games" />
            <button className="Go">Go</button>
        </div>
    );
}

export default Gamepage;
