import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import harvardArt from './data/harvardArt.js'

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

function Root(){
  return(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

// console.log(harvardArt)
