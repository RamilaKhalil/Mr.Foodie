import React from "react";
import { assets } from "../../assets/assets";


const Header = () => {
  return (
    <div className="">
      <div className="img h-2">
        <img
          className="h-[20vh] w-[90vw]  md:h-[80vh] md:w-[90vw] rounded-xl ml-4 mt-5
           md:ml-[50px]  md:mt-5  "
          src={assets.header_img}
          alt="#8"
        />
      </div>
      <h1
        className="text-[1.2rem] py-4 px-8 font-semibold
        md:text-[3rem] text-[#fff]  md:px-[80px] md:leading-[70px] "
      >
        Order Your
        <br />
        Favourite Food Here
      </h1>
      <p className="hidden md:block md:text-[1rem] md:text-white  md:px-[80px] md:py-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        reiciendis laboriosam tempora,
        <br /> provident tempore consequuntur eligendi dolorem ab nesciunt?
        Possimus inventore voluptate illum! Neque, obcaecati.
      </p>

      <button className="text-orange-600 bg-[#fff] rounded-xl text-[0.7rem] py-1 px-2 ml-8 md:ml-[80px] md:mt-[20px] md:py-3 md:px-6 md:rounded-2xl">
        view menu
      </button>
    </div>
  );
};

export default Header;
