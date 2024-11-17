import { createContext , useState , useEffect } from "react";
import { food_list } from "../../assets/assets";

export const StoreContext = createContext(null);

 const StoreContextProvider = ( props ) => {

    const [cartitems, setcartitem] = useState({})

    const addItemToCart = (itemId) => {
        if (!cartitems[itemId]){
            setcartitem({...cartitems, [itemId]: 1});
        }
        else{
            setcartitem({...cartitems, [itemId]: cartitems[itemId] + 1});
        }
    };
    const removeItemFromCart = (itemId) => {
        setcartitem({...cartitems, [itemId]: cartitems[itemId] - 1});

    }

    useEffect(() => {
    console.log(cartitems);
    }, [cartitems])
    
 
    const contextValue ={
         food_list,
         cartitems,
         setcartitem,
         addItemToCart,
         removeItemFromCart,
    };
return(
    
    <
// @ts-ignore
    StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
 );

    }
export default StoreContextProvider;

