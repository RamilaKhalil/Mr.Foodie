import React ,{ useContext } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../Context/StoreContext'

const FoodItem = ({id,name,price,description,image}) => {

  
 const {cartitems, addItemToCart , removeItemFromCart} = useContext(StoreContext)

  return (
    <div className='food-item w-full mx-auto rounded-lg
     shadow-md shadow-gray-300 transition duration-300 animate-fadeIn'>
        <div className="image relative">
            <img className='w-full rounded-t-lg' src={image} alt="" />
            {
              !cartitems[id]
               ? <img className='absolute bottom-4 right-4 w-[35px] cursor-pointer rounded-full'
                onClick={()=>addItemToCart(id)} src={assets.add_icon_white} alt="" />
               :<div className='absolute bottom-4 right-4 flex items-center gap-2 p-1.5 md:p-1 rounded-full bg-white'>
                   <img className='w-[30px] md:w-[25px]' onClick={()=>removeItemFromCart(id)} 
                   src={assets.remove_icon_red} alt="" />
                   <p>{cartitems[id]}</p>
                   <img className='w-[30px]  md:w-[25px]' onClick={()=>addItemToCart(id)} 
                   src={assets.add_icon_green} alt="" />
               </div>
            }
           </div>
        <div className=" p-5 flex justify-between items-center md:px-0 md:py-7">
        <p className='text-[1.5rem] font-medium  md:text-[1rem] md:font-normal md:pl-4'>{name}</p>
            <img className="md:pr-2 md:h-3 " src={assets.rating_starts} alt="" />
        </div>
        <p className='text-[0.8rem] font-semibold px-5 mt-[-10px] text-gray-500'>{description}</p> 
            <p className=' text-xl font-medium mt-2 mb-4 px-6 text-orange-600'>${price}</p>
   </div>
  )
}

export default FoodItem