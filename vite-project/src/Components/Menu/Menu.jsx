
//   return (
//     <div>
//         <h1 className='mt-10 text-[1.5rem] px-3 font-semibold text-[#262626] md:mt-[50px]
//         md:px-[50px] md:text-[2rem]
//         '>Explore our Menu</h1>
//         <p className='py-3 text-[0.9rem] px-3 md:text-[1.2rem] md:px-[50px] '>
//             Our menu is carefully crafted to provide a variety of options for all tastes and
//             dietary preferences.
//             <div className='flex justify-between items-center  text-center md:mt-[50px]
//             overflow-x-scroll mt-3  scrollbar-hide cursor-pointer md:gap-[30px] gap-[30px]'>
//                 {menu_list.map((item, index) => (
//                     <div key={index}>
//                         <img className='md:w-[20vw] md:h-[20vh] gap-6 overflow-x-scroll mt-3  scrollbar-hide' src={item.menu_image} alt=""
//                      />
//                         <p className=' hidden md:block py-3 '>{item.menu_name}</p>
//                     </div>
//                 ))}
//             </div>

//         </p>
//     </div>
//   )
// }

// export default Menu

//import React from 'react';


// const Menu = ({category,setCategory}) => {
//   return (
//     <div className='p-4 md:px-12'>
//       {/* Heading */}
//       <h1 className='mt-10 text-[1.5rem] font-semibold text-[#262626] md:mt-12 md:text-3xl'>
//         Explore our Menu
//       </h1>
      
//       {/* Description */}
//       <p className='py-3 text-sm md:text-lg'>
//         Our menu is carefully crafted to provide a variety of options for all tastes and dietary preferences.
//       </p>
      
//       {/* Menu List */}
//       <div className='flex items-center gap-4 overflow-x-auto overflow-y-hidden mt-6 scrollbar-hide md:gap-8'>
//         {menu_list.map((item, index) => (
//           <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='flex-shrink-0 text-center'>
//             {/* Menu Image */}
//             <img 
//               className={`${category===item.menu_name?'border-4 border-orange-600' : 'border-2 border-transparent'}w-24 h-24 md:w-28 md:h-28 object-cover rounded-full  cursor-pointer transition duration-200 ease-in-out hover:scale-105`} 
//               src={item.menu_image} 
//               alt={item.menu_name} 
//             />
//             {/* Menu Name */}
//             <p className='mt-2 text-gray-600 text-sm md:text-base'>{item.menu_name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Menu;

import React from 'react';
import { menu_list } from '../../assets/assets';

const Menu = ({ category, setCategory }) => {
  return (
    <div className='p-4 md:px-12 '>
      {/* Heading */}
      <h1 className='mt-10 text-[1.5rem] font-semibold text-[#262626] md:mt-12 md:text-3xl'>
        Explore our Menu
      </h1>

      {/* Description */}
      <p className='py-3 text-sm md:text-lg'>
        Our menu is carefully crafted to provide a variety of options for all tastes and dietary preferences.
      </p>

      {/* Menu List */}
      <div className='flex items-center gap-4 overflow-x-auto overflow-y-hidden mt-5 scrollbar-hide md:gap-8 py-3 bg-orange-500 md:bg-transparent rounded-xl'>
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() => setCategory(prev => (prev === item.menu_name ? 'All' : item.menu_name))}
            className='flex-shrink-0 text-center cursor-pointer'
          >
            {/* Menu Image with Conditional Border */}
            <img
              className={`w-22 h-24   md:w-28 md:h-28 object-cover rounded-full transition duration-200 ease-in-out hover:scale-105 ${
                category === item.menu_name ? 'ring-4 ring-[#fff] md:ring-4 md:ring-orange-600' : 'ring-2 ring-transparent'
              }`}
              src={item.menu_image}
              alt={item.menu_name}
            />
            {/* Menu Name */}
            <p className='mt-2 text-[#fff] md:text-gray-600 text-sm md:text-base'>{item.menu_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
