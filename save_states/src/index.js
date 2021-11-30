import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from 'react-dom';

import Homepage from './Homepage';
import Gamepage from './Gamepage';
import Userpage from './Userpage';
import Login from './Login';
import Signup from './Signup'

import './App.scss';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/game" element={<Gamepage />}/>
      <Route path="/login" element={<Login />}/>
      // <Route path="/user/:query" element={<Userpage />}/>
      <Route path="/user" element={<Userpage />}/>
      <Route path="/signup" element={<Signup />}/>

    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
