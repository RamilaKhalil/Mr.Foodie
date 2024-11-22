import React from "react";
import { menu_list } from "../../assets/assets";

const Menu = ({ category, setCategory }) => {
  return (
    <div className="p-4 md:px-12 ">
      {/* Heading */}
      <h1 className="mt-10 text-[1.5rem] font-semibold text-[#262626] md:mt-12 md:text-3xl">
        Explore our Menu
      </h1>

      {/* Description */}
      <p className="py-3 text-sm md:text-lg">
        Our menu is carefully crafted to provide a variety of options for all
        tastes and dietary preferences.
      </p>

      {/* Menu List */}
      <div className="flex items-center gap-4 overflow-x-auto overflow-y-hidden mt-5 scrollbar-hide md:gap-8 py-3 bg-orange-500 md:bg-transparent rounded-xl">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
            className="flex-shrink-0 text-center cursor-pointer"
          >
            {/* Menu Image with Conditional Border */}
            <img
              className={`w-22 h-24   md:w-28 md:h-28 object-cover rounded-full transition duration-200 ease-in-out hover:scale-105 ${
                category === item.menu_name
                  ? "ring-4 ring-[#fff] md:ring-4 md:ring-orange-600"
                  : "ring-2 ring-transparent"
              }`}
              src={item.menu_image}
              alt={item.menu_name}
            />
            {/* Menu Name */}
            <p className="mt-2 text-[#fff] md:text-gray-600 text-sm md:text-base">
              {item.menu_name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
