import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import '../public/fonts/fonts.css';
import { BrowserRouter } from 'react-router-dom';
import StoreContextProvider from './Components/Context/StoreContext.jsx';


// @ts-ignore
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StoreContextProvider>
  <App />
  </StoreContextProvider>  
  </BrowserRouter>
   

)
