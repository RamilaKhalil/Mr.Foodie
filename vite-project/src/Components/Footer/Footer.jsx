
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-orange-600 text-white py-18">
      <div className="container mx-auto mt-8 px-6">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <h1 className="md:hidden text-3xl font-bold py-5  pb-2 md:px-[50px] md:text-[3rem]">
              Mr.Foodie
            </h1>
            <p className="mt-4 md:mt-0 md:pt-3 max-w-xs text-center md:text-centre leading-8 bg-[#fff] rounded-xl text-orange-600 p-5 text-[1rem] md:hidden">
              Your go-to destination for delicious food delivered straight to
              your door. Fresh ingredients, amazing flavors, and speedy
              delivery.
            </p>
          </div>

          {/* Right Side Images (Visible only on md and larger screens) */}
          <div className="hidden md:flex justify-end md:mr-[-550px]  mt-8 md:mt-0 space-x-4">
            <img
              src="/public/food_2.png"
              alt="Food Image 1"
              className="w-[220px] h-[220px] object-cover rounded-lg"
            />
            <img
              src="/public/food_23.png"
              alt="Food Image 2"
              className="w-[220px] h-[220px] object-cover rounded-lg"
            />
            <img
              src="/public/food_18.png"
              alt="Food Image 3"
              className="w-[220px] h-[220px] object-cover rounded-lg"
            />
            <img
              src="/public/food_23.png"
              alt="Food Image 3"
              className="w-[220px] h-[220px] object-cover rounded-lg"
            />
          </div>
          {/* Navigation Links */}
          <div className="flex  justify-center items-center gap-4 md:gap-8 mt-6 md:mt-0 md:pt-[300px] md:mr-[70px]">

            
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#" className="hover:underline">
              About
            </a>
            <a href="#" className="hover:underline">
              Menu
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
            <a href="#" className="hover:underline">
              FAQs
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-8 md:gap-6 mt-6 md:pt-[300px]">
            <a
              href="#"
              className="text-2xl hover:text-gray-200"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-2xl hover:text-gray-200"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="text-2xl hover:text-gray-200"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-10 border-t border-gray-300 pt-8 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Mr.Foodie. All Rights Reserved.</p>
            <div className="space-x-4 mt-5 text-gray-200">
              <a href="#" className="hover:underline px-3">
                | Privacy Policy |
              </a>
              <a href="#" className="hover:underline">
                | Terms of Service |
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;