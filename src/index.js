import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import {Provider} from "react-redux";
import store from "./store";
ReactDOM.render(
  <Provider store = {store}>
  <Router>
      <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>
  </Provider>,
  document.getElementById('root')
);

