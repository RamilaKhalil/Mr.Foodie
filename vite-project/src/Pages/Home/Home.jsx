import React, {useState} from 'react';
import Header from '../../Components/Header/Header';
import Menu from '../../Components/Menu/Menu';
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay';


const Home = () => {

    const [category, setCategory] = useState("All")

  return (
    <div>
      <Header/>
      <Menu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
    </div>
  )
}

export default Home;