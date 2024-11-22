// src/components/Navbar.js

import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "./Context/StoreContext";

const Navbar = ({ setshowlogin }) => {
  // @ts-ignore
  const { Totalitemcart } = useContext(StoreContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle menu toggle

  return (
    <nav className="w-full md:bg-white border-spacing-2 border-y-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-14">
          <Link to="/">
            <h1
              className="text-[1.5rem] font-bold
           text-orange-600 md:text-[1.7rem]"
            >
              Mr.Foodie
            </h1>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-10 gap-[120px] ">
            <Link
              to="/"
              className="hover:underline text-orange-600 font-semibold text-[1.2rem] "
            >
              Home
            </Link>

            <Link
              to="/About"
              className="hover:underline text-orange-600 font-semibold text-[1.2rem]"
            >
              About
            </Link>
            <Link
              to="/Contact"
              className="hover:underline text-orange-600 font-semibold text-[1.2rem]"
            >
              Contact
            </Link>
          </div>

          {/* Right Side Buttons */}
          <div className="nav-right flex space-x-5 items-center">
            {/* Basket Icon */}
            <div className="nav-search flex relative">
              <Link to="/cart">
                <img src={assets.basket_icon} alt="Basket" />
              </Link>
              <div
                className={
                  Totalitemcart() === 0
                    ? ""
                    : "absolute md:w-[1vw] md:h-[2.5vh] rounded-full bg-orange-600 md:mt-[-10px] ml-[13px] w-[1.5vw] h-[0.8vh] mt-[-6px]"
                }
              ></div>
            </div>

            {/* Sign In Button */}
            <button
              onClick={() => setshowlogin(true)}
              className="md:w-[8vw] md:h-9 bg-orange-600 text-white rounded flex items-center justify-center hover:bg-orange-500 mt-[-2px] w-[18vw] h-7 text-[0.8rem]"
            >
              Sign in
            </button>

            {/* Menu Icon for Mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-orange-600 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-md mt-2">
            <Link
              to="/"
              className="block text-orange-600 hover:text-orange-500 py-2 px-4"
            >
              Home
            </Link>
            <Link
              to="/About"
              className="block text-orange-600 hover:text-orange-500 py-2 px-4"
            >
              About
            </Link>
            <Link
              to="/Contact"
              className="block text-orange-600 hover:text-orange-500 py-2 px-4"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
