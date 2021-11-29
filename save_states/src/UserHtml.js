// DOM Elements
const game = document.getElementById('game');
const name = document.getElementById('name');

const username = 'jedjed';

const url = 'http://localhost:3001/currgame/' + username;

fetch(url)
    .then(res => res.json())
	.then(json => {
	    thisname = json.User;
	    thisgame = json.Game;
	    console.log(thisgame);
	    console.log(thisname);
	    game.textContent = "My current game is " + thisgame;
	    name.textContent = "My name is " + thisname;
	})

