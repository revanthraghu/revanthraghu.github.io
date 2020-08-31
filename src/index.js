import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.onload = () => {
  document.getElementById('loading').remove()
  ReactDOM.render(
    <App />,
  document.getElementById('root')
  );
}