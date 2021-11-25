# SaveStates
This project aims to be a place for the gaming community to share their reviews
of various titles, and for each player to see what their friends are up to.

## Dependencies
Make sure you have [Node.js](https://nodejs.org/en/download/) installed.

## Quickstart
Run the following commands in the terminal:
```sh
git clone https://github.com/alanhwu/SaveStates.git
cd SaveStates/save_states && npm install
npm start
```
To start the backend servers, run `node servers/Login.js`. Then visit
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
└─── public/
      └─── logo.png
      └─── ...
└─── databases/
      └─── user_info.db
      └─── ...
```

### `package.json`
The `package.json` file contains a bunch of macros and instructions for how
`npm` (Node Package Manager) handles dependencies and different commands. The
main thing to take note of is the section under `scripts`, which defines
commands such as `npm start` (which you use to start the project).

### `src/`
This folder contains the source files for the various webpages, which are
written mostly in JSX. Chief among these is `src/index.js`, which defines a lot
of the interactions between the actual webpages.

#### `src/index.js`
This file utilizes `Routes` from the `react-router-dom` dependency to redirect
the user between various webpages. One can think of the webpages in this project
as belonging to a POSIX-esque file tree, where `/` is the homepage and other
pages are given paths like `/gamepage`. In fact, this is exactly what is
accomplished in `src/index.js`, as seen below:
```xml
<Route path="/" element={<Homepage />}/>
<Route path="/gamepage" element={<Gamepage />}/>
```
For example, the second line in the code snippet above defines the file path
`/gamepage` to use the file `src/Gamepage.js` for its contents. You can verify
this yourself by visiting `localhost:3000/gamepage`.

#### `src/[Other files].js`
These files house the actual webpages themselves, and simply contain a function
that returns the contents of the webpage. Of note is the `Link` XML tag, which
allows for redirects between pages using the aforementioned `/` file tree schema
for organizing the webpages.

### `databases/`
Contains the databases---will contain separate files to store information about
the user and about various games.

### `start_db.js`
This file contains the script necessary to locally host our databases at
`localhost:3001`. It currently supports adding username--password combinations
to `user_info.db`, as well as querying `games.db` for game titles.
* TODO: Make game search functionality better
* TODO: Once login/sign up screens are distinct, write one function to query
  `user_info.db` and one to append to it.

### `public/`
As far as I can tell, this folder just contains resources that may be used by
webpages in the `src/` folder.
