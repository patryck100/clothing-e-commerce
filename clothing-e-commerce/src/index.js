import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  //BrowserRouter is a component that gives the functionalities of the react router to the app
  <BrowserRouter> 
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

