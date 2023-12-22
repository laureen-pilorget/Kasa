import React from 'react';
import ReactDOM from 'react-dom/client';
import Path from './pages/path/path.jsx';
import './utilities/layout.scss'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Path/>
  </React.StrictMode>
);
