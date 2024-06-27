// Aqui começa a aplicação no INDEX.JS

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode> 
    <App /> 
  </React.StrictMode>
);

//StrictMode ajuda a detectar erros no console do navegador

