import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main'
import reportWebVitals from './reportWebVitals';

class App extends React.Component {
  render() {
    return (<div className = "App"> <h1> Hello there! </h1></div>) } }
       

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
