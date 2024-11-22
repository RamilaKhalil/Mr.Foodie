import { createContext, useState, useEffect } from "react";
import { food_list } from "../../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartitems, setcartitem] = useState({});

  const addItemToCart = (itemId) => {
    if (!cartitems[itemId]) {
      setcartitem({ ...cartitems, [itemId]: 1 });
    } else {
      setcartitem({ ...cartitems, [itemId]: cartitems[itemId] + 1 });
    }
  };
  const removeItemFromCart = (itemId) => {
    setcartitem({ ...cartitems, [itemId]: cartitems[itemId] - 1 });
  };

  const Totalitemcart = () => {
    let Totalitem = 0;
    for (const item in cartitems) {
      if (cartitems[item] > 0) {
        let info = food_list.find((product) => product._id === item);
        // @ts-ignore
        Totalitem += info.price * cartitems[item];
      }
    }
    return Totalitem;
  };

  const contextValue = {
    food_list,
    cartitems,
    setcartitem,
    addItemToCart,
    removeItemFromCart,
    Totalitemcart,
  };
  return (
    // @ts-ignore
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
