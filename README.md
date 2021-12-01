# SaveStates
This project aims to be a place for the gaming community to share their reviews
of various video games via playthrough entries, and compare their thoughts to
other users.

## Dependencies
Make sure you have [Node.js](https://nodejs.org/en/download/) installed.

## Quickstart
Run the following commands in the terminal:
```sh
git clone https://github.com/alanhwu/SaveStates.git
cd SaveStates/save_states && npm install
npm start
```
To start the backend servers, run `node start_db.js`. Then visit
`localhost:3000` in your browser of choice.

## How this project is organized
The general file structure for this project is as follows:
```
README.md (You are here!)
save_states/
└─── package.json
└─── package-lock.json
└─── start_db.js
└─── src/
      └─── index.js
      └─── Homepage.js
      └─── Gamepage.js
      └─── ...
└─── databases/
      └─── user_info.db
      └─── games.db
      └─── ...
└─── public/
      └─── logo.png
      └─── ...
```

### `package.json`
The `package.json` file contains a bunch of macros and instructions for how
`npm` (Node Package Manager) handles dependencies and different commands. The
main thing to take note of is the section under `scripts`, which defines
commands such as `npm start` (which you use to start the project).

### `start_db.js`
This file contains the script necessary to locally host our databases (in
`databases/`) at `localhost:3001`, as well as allow for interaction with the
databases. There are functions to query the databases, as well as
add/change/remove items from them.

### `src/`
This folder contains the source files for the various webpages, which are
written mostly in JSX. Chief among these is `src/index.js`, which uses routes to
define how all of the webpages link to each other.

#### `src/index.js`
This file utilizes `Routes` from the `react-router-dom` dependency to redirect
the user between various webpages. One can think of the webpages in this project
as belonging to a POSIX-esque file tree, where `/` is the homepage and other
pages are given paths like `/gamepage`. In fact, this is exactly what is
accomplished in `src/index.js`, as seen below:
```xml
<Route path="/" element={<Homepage />}/>
<Route path="/game" element={<Gamepage />}/>
<Route path="/login" element={<Login />}/>
```
For example, the second line in the code snippet above defines the file path
`/game` to use the file `src/Gamepage.js` for its contents. You can verify
this yourself by visiting `localhost:3000/game?Mario` (where `Mario` is a search
query).

#### `src/[Other files].js`
These files house the actual webpages themselves, and simply contain a function
that returns the contents of the webpage. Of note is the `Link` XML tag, which
allows for redirects between pages using the aforementioned `/` file tree schema
for organizing the webpages. Most of these pages utlilize the APIs in
`start_db.js` in order to dynamically populate the page contents.

### `databases/`
Contains the backend databases that contain all of the data. In this project we
have three databases:
* `user_info.db`---Stores information about the user, such as `username`,
  `followers`, etc.
* `games.db`---Stores information about the games, such as `Name`,
  `CoverArt`, etc.
* `reviews.db`---Stores information about the games, such as `entryName`,
  `entryRating`, etc.

### `public/`
Contains some auto-generated files that ensure the project runs.
