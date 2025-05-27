import React, { useContext, useEffect, useState } from 'react'
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext);
    const [shuffledFoodList,setShuffledFoodList] = useState([]);
    const getRandomFoodList = (list) => {
      return list.sort(() => Math.random() - 0.5);}

    useEffect(()=>{
      setShuffledFoodList(getRandomFoodList(food_list));

    },[food_list])
  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
            {shuffledFoodList.map((item, index) => {
  if (category === "All" || category === item.category) {
    return (
      <FoodItem
        key={index}
        id={item._id}
        name={item.name}
        description={item.description}
        price={item.price}
        image={item.image}
        rating={item.rating}
      />
    );
  } else {
    return null; // <== important!
  }
})}

        </div>
    </div>
  )
}

export default FoodDisplay
