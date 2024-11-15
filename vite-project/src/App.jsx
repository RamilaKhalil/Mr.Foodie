// src/App.js
import React from 'react';
import Navbar from './Components/Navbar';
import '../public/fonts/fonts.css';
import {Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import PLaceOrder from './Pages/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div className="h-full w-full bg-white">
    <Navbar />
      <Routes>       
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/PlaceOrder" element={<PLaceOrder />} />
      </Routes>
    </div>
  );
}

export default App;
