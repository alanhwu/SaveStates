import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from './Homepage';
import Gamepage from './Gamepage';
import Loginpage from './Loginpage';
import reportWebVitals from './reportWebVitals';
import './index.css';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/gamepage" element={<Gamepage />}/>
      <Route path="/loginpage" element={<Loginpage />}/>
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
