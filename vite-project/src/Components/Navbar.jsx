// src/components/Navbar.js
import React from 'react'
import { assets } from '../assets/assets';


const Navbar = ({setshowlogin}) => {

  

  return (
    <nav className="w-full md:bg-[#fff] border-spacing-1 border-y-2   ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 md:h-14">
        
          <h1 className="text-[1.3rem] font-bold
           text-orange-600 md:text-[1.7rem]">Mr.Foodie</h1>

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
              <div className="absolute md:w-[1vw] md:h-[2.5vh] rounded-full
               bg-orange-600 md:mt-[-10px] ml-[13px] w-[1.5vw] h-[0.8vh] mt-[-6px] "></div>
            </div>
            <button onClick={()=>setshowlogin(true)} 
            className= "md:w-[8vw] md:h-7 bg-orange-600 text-white rounded flex items-center justify-center hover:bg-orange-500 mt-[-3px] w-[18vw] text-[0.8rem]  ">
          Sign in
         </button>

          </div>

          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
