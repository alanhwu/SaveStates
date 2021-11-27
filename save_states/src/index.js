import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from './Homepage';
import Gamepage from './Gamepage';
import Loginpage from './Loginpage';
import reportWebVitals from './reportWebVitals';
import './index.css';
=======
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import Homepage from './Homepage';
import Gamepage from './Gamepage';
import Userpage from './Userpage';
import reportWebVitals from './reportWebVitals';
import Login from './Login';

import './App.scss';
>>>>>>> reactOtherPages

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/gamepage" element={<Gamepage />}/>
<<<<<<< HEAD
      <Route path="/loginpage" element={<Loginpage />}/>
=======
      <Route path="/login" element={<Login />}/>
      <Route path="/user" element = {<Userpage />}/>
>>>>>>> reactOtherPages
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
