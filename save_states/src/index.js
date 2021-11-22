import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import Homepage from './Homepage';
import Gamepage from './Gamepage';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/gamepage" element={<Gamepage />}/>
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
