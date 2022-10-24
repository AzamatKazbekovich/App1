import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id:1, message: 'Hi, how are you?', likesCount: 12},
  {id:2, message: 'It is my first post', likesCount: 11},
  {id:3, message: 'It is', likesCount: 11},
  {id:4, message: 'It is my first', likesCount: 11}
]

let dialogs = [
  {id:1, name: 'Rezvan'},
  {id:2, name: 'Anvar'},
  {id:3, name: 'Kairat'},
  {id:4, name: 'Erken'},
  {id:5, name: 'Radjan'},
  {id:6, name: 'Zair'}
]

let messages = [
  {id:1, message: 'Hi'},
  {id:2, message: 'How is your it?'},
  {id:3, message: 'Yo'},
  {id:4, message: 'Yo'},
  {id:5, message: 'Yo'}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
