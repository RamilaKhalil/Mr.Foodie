// src/App.js
import React ,{useState} from 'react';
import Navbar from './Components/Navbar';
import '../public/fonts/fonts.css';
import {Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import PLaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Footer from './Components/Footer/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Login from './Components/Login/Login';


function App() {

  const [showlogin, setshowlogin] = useState(false)
  return (
    <>
    {showlogin?<Login setshowlogin={setshowlogin}/>:<></>}
    <div className="h-full w-full bg-white">
    <Navbar setshowlogin={setshowlogin} />
      <Routes>       
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/PlaceOrder" element={<PLaceOrder />} />
      </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
