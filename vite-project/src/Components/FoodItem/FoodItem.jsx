import React from 'react'
import { assets } from '../../assets/assets'

const FoodItem = ({id,name,price,description,image}) => {
  return (
    <div className='food-item w-full mx-auto rounded-lg
     shadow-md shadow-gray-300 transition duration-300 animate-fadeIn'>
        <div className="image ">
            <img className='w-full rounded-t-lg' src={image} alt="" />
        </div>
        <div className=" p-5 flex justify-between items-center md:px-6 md:py-7">
        <p className='text-[1.5rem] font-medium md:text-[1rem]'>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className='text-[0.8rem] font-semibold px-5 mt-[-10px] text-gray-500'>{description}</p> 
            <p className=' text-xl font-medium mt-2 mb-4 px-6 text-orange-600'>${price}</p>
    
    </div>
  )
}

export default FoodItem