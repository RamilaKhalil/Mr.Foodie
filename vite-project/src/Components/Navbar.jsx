// src/components/Navbar.js
import React from 'react'
import { assets } from '../assets/assets';


const Navbar = () => {

  

  return (
    <nav className="w-full bg-[#fff] border-spacing-1 border-y-2  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-10 md:h-14">
          <img  src={assets.logo} alt="" className="h-6" />
          

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-10  gap-8">
          <a href="#" className={` hover:underline text-orange-600
          font-semibold text-[1.2rem] `}>
              Home
            </a>
            
            
            <a href="#" className={`hover:underline text-orange-600
            font-semibold text-[1.2rem]`}>
              About
            </a>
            <a href="#" className={`hover:underline text-orange-600
           font-semibold text-[1.2rem]`}>
              Contact
            </a>
           
          </div>
          <div className="nav-right flex space-x-5  h-5">
            <img src={assets.search_icon} alt="" />
            <div className="nav-search flex relative">
              <img src={assets.basket_icon} alt="" />
              <div className="absolute w-[1vw] h-[2.5vh] rounded-full bg-orange-600 mt-[-10px] ml-[13px]"></div>
            </div>
            <button className= "md:w-[8vw] md:h-7 bg-orange-600 text-white rounded flex items-center justify-center hover:bg-orange-500 mt-[-3px]  ">
  Sign In
</button>

          </div>

          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
