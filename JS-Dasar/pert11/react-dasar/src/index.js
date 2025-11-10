import React from 'react';
import ReactDOM from 'react-dom/client';
import Test from './componets/jajal';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
export let nama2 = "wajiku";

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

root2.render(
  <Test />
);

