import { createContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContexProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = "https://food-del-backend-nu0w.onrender.com";
  const [token,setToken] = useState("");
  const [food_list,setFoodList] = useState([]);

  const addToCart = async(itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if(token){
      await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
    }
  };

  const removeFromCart = async(itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if(token){
      await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
    }
  };

  const getTotalCartAmount = () => {
  let totalAmount = 0;

  if (food_list.length === 0) return 0; // ✅ Optional safety check

  for (const item in cartItems) {
    if (cartItems[item] > 0) {
      let itemInfo = food_list.find(
        (product) => product._id.toString() === item.toString() // ✅ Fix for ObjectId mismatch
      );

      if (itemInfo) {
        totalAmount += itemInfo.price * cartItems[item];
      } else {
        console.warn(`Item ID ${item} not found in food_list`);
      }
    }
  }

  return totalAmount; // ✅ Now correctly returns after loop finishes
};


  const fetchFoodList = async()=>{
    const response = await axios.get(url+"/api/food/list")
    setFoodList(response.data.data);
  }

  const loadCartData = async(token) => {
    const response = await axios.post(url+"/api/cart/get",{},{headers:{token}})
    setCartItems(response.data.cartData);
    console.log(cartItems)
  }

  useEffect(()=>{
    
    async function loadData() {
      await fetchFoodList();
      if(localStorage.getItem("token")){
        setToken(localStorage.getItem("token"))
        await loadCartData(localStorage.getItem("token"))
      }
    }
    loadData();
  },[])

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContexProvider;
