import React from 'react';
import ReactDOM from 'react-dom';
import 'flexboxgrid';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/index.scss';

library.add(faFacebook, faInstagram, faTwitter, faYoutube);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
