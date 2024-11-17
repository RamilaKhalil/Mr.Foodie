import React from "react";
import { StoreContext } from "../Context/StoreContext";
import { useContext } from "react";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  // @ts-ignore
  const { food_list } = useContext(StoreContext);

  return (
    <div className="mt-5 px-5 ">
      <h1 className="text-[1.7rem] font-semibold md:px-6">Our Best dishes</h1>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] mt-8 gap-x-7 gap-y-12 ">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
