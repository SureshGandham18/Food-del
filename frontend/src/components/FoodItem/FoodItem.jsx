import React, { useContext } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'; // Import star icons
import './FoodItem.css';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, description, price, image, rating }) => {
    const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);
  console.log(name,description,image);
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<FaStar key={i} color="#FFD700" />); 
      } else if (i - 0.5 === rating) {
        stars.push(<FaStarHalfAlt key={i} color="#FFD700" />); 
      } else {
        stars.push(<FaRegStar key={i} color="#FFD700" />); 
      }
    }
    return stars;
  };

  return (
    <div className='food-item'>
      <div className="food-item-image-container">
        <img className="food-item-image" src={`${url}/images/${image}`} alt={name} />
        
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <div className="food-item-stars">{renderStars(rating)}</div>
        </div>
        <p className="food-item-description">{description}</p>
        <div className="food-item-price-add">
        <p className="food-item-price">&#8377;{price}</p>
        {!cartItems[id]?<button onClick={()=>addToCart(id)}>Add</button>:
        <div className='food-item-counter'>
            <FaMinus className='minus' onClick={()=>removeFromCart(id)}/>
            <p>{cartItems[id]}</p>
            <FaPlus className='plus' onClick={()=>addToCart(id)}/>
        </div>}
        
        </div>
        
      </div>
    </div>
  );
};

export default FoodItem;
