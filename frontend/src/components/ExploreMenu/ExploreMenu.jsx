import React from 'react';
import './ExploreMenu.css'

const ExploreMenu = ({category,setCategory}) => {
    const categories = [
        {category_name: "Tiffins", 
        category_image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
        {category_name: "Biryani's", 
        category_image: "https://cdn.pixabay.com/photo/2024/01/18/17/20/ai-generated-8517258_1280.jpg"},
        {category_name: "Meals", 
        category_image: "https://images.pexels.com/photos/14132112/pexels-photo-14132112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
        {category_name: "Curries", 
        category_image: "https://images.pexels.com/photos/2679501/pexels-photo-2679501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
        {category_name: "Starters", 
        category_image: "https://images.pexels.com/photos/29177211/pexels-photo-29177211/free-photo-of-delicious-middle-eastern-feast-with-variety.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
        {category_name: "Sweets", 
        category_image: "https://images.pexels.com/photos/8887055/pexels-photo-8887055.jpeg"},
        {category_name: "Ice Creams", 
        category_image: "https://images.pexels.com/photos/29851698/pexels-photo-29851698/free-photo-of-artisan-desserts-with-strawberry-ice-cream.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
        {category_name: "Beverages", 
        category_image: "https://images.pexels.com/photos/2531184/pexels-photo-2531184.jpeg"},
        {category_name: "Sandwiches", 
        category_image: "https://images.pexels.com/photos/133578/pexels-photo-133578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
        {category_name: "Burgers", 
        category_image: "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg"},
        {category_name: "Snacks", 
        category_image: "https://images.pexels.com/photos/36756/food-pizza-roll-baked.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
        {category_name: "Cakes",
        category_image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
        {category_name: "Desserts",
        category_image: "https://images.pexels.com/photos/3026810/pexels-photo-3026810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
      ];
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
      <div className="explore-menu-list">
        {categories.map((item,index)=>{
          return(
            <div onClick={()=>setCategory(prev=>prev===item.category_name?"All":item.category_name)} key={index} className="explore-menu-list-item">
              <img className={category===item.category_name?"active":""} src={item.category_image} alt="" />
              <p>{item.category_name}</p>
            </div>
          )
        })}
      </div>
      <hr/>
    </div>
  )
}

export default ExploreMenu