import React from "react";
import { assets } from "../../assets/assets";

const About = () => {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-600">
            Mr.Foodie :)
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Bringing your favorite meals to your doorstep, hot, fresh, and fast.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <img
              src={assets.fast_img}
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-orange-600 opacity-10 rounded-lg"></div>
          </div>

          {/* Content Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-orange-600">
              Our Mission
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              At Mr.Foodie, our mission is to make food delivery a delightful
              and convenient experience. Whether it's a quick snack or a full
              meal, we ensure that you enjoy your favorite dishes from the best
              restaurants in town.
            </p>

            <h3 className="mt-8 text-xl font-medium text-orange-600">
              Why Choose Us?
            </h3>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-orange-600 font-bold text-lg mr-3">
                  ✓
                </span>
                Fast and reliable delivery service.
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 font-bold text-lg mr-3">
                  ✓
                </span>
                Wide variety of cuisines and restaurants.
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 font-bold text-lg mr-3">
                  ✓
                </span>
                Easy-to-use app with secure payment options.
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 font-bold text-lg mr-3">
                  ✓
                </span>
                Dedicated customer support to assist you 24/7.
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-600">
            Ready to Savor the Best?
          </h2>
          <p className="mt-4 text-gray-600">
            Join thousands of food lovers who trust Mr.Foodie for their
            cravings!
          </p>
          <button className="mt-6 px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-500 transition">
            Explore Our Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
