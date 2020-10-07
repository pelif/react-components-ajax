import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import TodoListApp from './container/TodoListApp'; 
import WeatherApp from './container/WeatherApp'; 
import SearchZipCode from './container/SearchZipCode'; 
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <SearchZipCode />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
