# SaveStates
This project aims to be a place for the gaming community to share their reviews
of various titles, and for each player to see what their friends are up to.

## Quickstart
To get started, clone this repository with `git clone
git@github.com:alanhwu/SaveStates.git`, and then switch into the
`createotherpages` branch by running `git checkout createotherpages`. Then,
install dependencies with `cd save_states && npm install`. Finally, run the
project with `npm start`.

## How this project is organized
The general file structure for this project is as follows:
```
README.md (You are here!)
save_states/
└─── package.json
└─── package-lock.json
└─── src/
      └─── index.js
      └─── Homepage.js
      └─── Gamepage.js
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

#### `src/[Other files].js`
These files house the actual webpages themselves, and simply contain a function
that returns the contents of the webpage. Of note is the `Link` XML tag, which
allows for redirects between pages using the aforementioned `/` file tree schema
for organizing the webpages.

### `public/`
As far as I can tell, this folder just contains resources that may be used by
webpages in the `src/` folder.
