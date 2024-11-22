import React, { useContext } from "react";
import { StoreContext } from "../../Components/Context/StoreContext";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  // @ts-ignore
  const { cartitems, food_list, removeItemFromCart, Totalitemcart } =
    useContext(StoreContext);

  const navigate = useNavigate();
  return (
    <div className="w-full max-w-4xl mx-auto mt-5 p-4 md:p-8 bg-[#f8f1f139] shadow-md rounded-lg">
      {/* Header */}
      <div className="grid grid-cols-2 md:grid-cols-6 text-center text-sm md:text-base font-semibold border-b pb-2 text-[#474444]">
        <p>Items</p>
        <p>Title</p>
        <p className="hidden md:block">Price</p>
        <p className="hidden md:block">Quantity</p>
        <p className="hidden md:block">Total</p>
        <p className="hidden md:block">Remove</p>
      </div>
      <br />

      {/* Cart Items */}
      {food_list.map((item, index) => {
        if (cartitems[item._id] > 0) {
          return (
            <div
              key={index}
              className="grid grid-cols-2 md:grid-cols-6 items-center text-center py-6 border-b gap-4"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover mx-auto rounded"
              />
              {/* Title */}
              <p className="md:font-medium text-sm">{item.name}</p>
              {/* Price */}
              <p className="text-gray-600 hidden md:block">${item.price}</p>
              {/* Quantity */}
              <p className="text-white md:text-black bg-orange-500 md:bg-transparent rounded-lg px-2 py-1 inline-block">
                {cartitems[item._id]}
              </p>
              {/* Total */}
              <p className="font-semibold text-green-600 hidden md:block">
                ${(item.price * cartitems[item._id]).toFixed(2)}
              </p>
              {/* Remove */}
              <button
                onClick={() => removeItemFromCart(item._id)}
                className="text-orange-500 hover:text-orange-200 cursor-pointer"
              >
                ✖
              </button>
            </div>
          );
        }
      })}

      {/* Cart Totals Section */}
      <div className="mt-6 bg-orange-500 p-4 rounded-lg shadow-sm">
        <h2 className="text-lg font-bold mb-4 text-white pb-2">Cart Totals</h2>

        {/* Sub Total */}
        <div className="flex justify-between items-center py-2">
          <p className="text-gray-300">Sub Total</p>
          <p className="font-medium text-gray-300">${Totalitemcart()}</p>
        </div>
        <hr className="my-2" />

        {/* Delivery */}
        <div className="flex justify-between items-center py-2">
          <p className="text-gray-300">Delivery</p>
          <p className="font-medium text-gray-300">${2}</p>
        </div>
        <hr className="my-2" />

        {/* Total */}
        <div className="flex justify-between items-center py-2">
          <b className="text-white">Total</b>
          <b className="text-lg font-bold text-white">${Totalitemcart() + 2}</b>
        </div>

        {/* Checkout Button */}
        <button
          onClick={() => navigate("/PlaceOrder")}
          className="w-full bg-white hover:bg-slate-50 text-orange-600 font-medium py-2 rounded mt-4 transition duration-200"
        >
          PROCEED TO CHECKOUT
        </button>
      </div>

      {/* Promo Code Section */}
      <div className="mt-6 bg-white p-4 rounded-lg">
        <p className="text-sm text-gray-600 mb-2">
          If you have a promo code, enter it here:
        </p>
        <div className="flex flex-col md:flex-row items-center gap-2">
          <input
            type="text"
            placeholder="Promo code"
            className="flex-grow px-3 py-2 border border-gray-300 rounded "
          />
          <button className="text-white bg-orange-600 font-medium py-1 px-4 rounded transition duration-200">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
