import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// this will remove default browser css.
// damn! I have never known that there were default broswer css.
import '../node_modules/normalize.css/normalize.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


