import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
//TODO USER
// import User from './CrudUsers/User';
// import store from './CrudUsers/store';
//TODO COUNTER 
// import Counter from './Counter';
// import reducer from './reducer';
// import { legacy_createStore } from 'redux';
// const storeCounter = legacy_createStore(reducer)

//TODO CLIENT
import Clients from './Client/clients';
import store from './Client/store';

import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Clients />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
