// DOM Elements
const game = document.getElementById('game');
const name = document.getElementById('name');


const username = 'sadge';

const url = 'http://localhost:3001/finduser/' + username;

fetch(url)
    .then(res => res.json())
	.then(json => {
	    thisname = json[0].Username;
	    thisgame = json[0].Game;
	    console.log(thisgame);
	    console.log(thisname);
	    game.textContent = "My current game is " + thisgame;
	    name.textContent = "My name is " + thisname;
	})

