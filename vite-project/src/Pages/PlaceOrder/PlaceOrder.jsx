import React, { useState } from "react";

const PlaceOrder = () => {
  const [orderDetails, setOrderDetails] = useState({
    name: "",
    address: "",
    phone: "",
    instructions: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Details:", orderDetails);
    alert("Your order has been placed successfully!");
  };

  return (
    <div className="min-h-screen bg-[#fff] py-12 shadow-inner">
      <div className="max-w-xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-orange-600 mb-8">
          Place Your Order
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-6 space-y-6"
        >
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={orderDetails.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              required
              className="mt-2 block w-full p-3 border border-orange-600 rounded-lg"
            />
          </div>

          {/* Address Field */}
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-600"
            >
              Delivery Address
            </label>
            <textarea
              id="address"
              name="address"
              value={orderDetails.address}
              onChange={handleInputChange}
              placeholder="Enter your delivery address"
              rows={1}
              required
              className="mt-2 block w-full p-3 border border-orange-500 rounded-lg"
            ></textarea>
          </div>

          {/* Phone Field */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-600"
            >
              Contact Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={orderDetails.phone}
              onChange={handleInputChange}
              placeholder="Enter your contact number"
              required
              className="mt-2 block w-full p-3 border rounded-lg border-orange-500"
            />
          </div>

          {/* Special Instructions Field */}
          <div>
            <label
              htmlFor="instructions"
              className="block text-sm font-medium text-gray-600"
            >
              Special Instructions (Optional)
            </label>
            <textarea
              id="instructions"
              name="instructions"
              value={orderDetails.instructions}
              onChange={handleInputChange}
              placeholder="Any special instructions for your order?"
              rows={3}
              className="mt-2 block w-full p-3 border b rounded-lg border-orange-600"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-orange-600 text-white font-medium py-3 rounded-lg hover:bg-orange-500 transition"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlaceOrder;
