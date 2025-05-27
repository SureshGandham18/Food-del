import React, { useEffect, useState } from "react";
import "./Add.css";
import { FaFileUpload } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({ url }) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Tiffins",
    rating:"",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (!data.rating) {
      toast.error("Please enter a rating");
      return;
    }

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);
    formData.append("rating",Number(data.rating))
    const response = await axios.post(`${url}/api/food/add`, formData);
    console.log(response);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Tiffins",
        rating:""
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-image-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            {image ? (
              <img src={URL.createObjectURL(image)} />
            ) : (
              <FaFileUpload className="img" />
            )}
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here"
          />
        </div>
        <div className="add-product-description flex-col">
          <p>Product description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="write content here"
            required
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select onChange={onChangeHandler} name="category">
              <option value="Tiffins">Tiffins</option>
              <option value="Biryani's">Biryani's</option>
              <option value="Meals">Meals</option>
              <option value="Curries">Curries</option>
              <option value="Chutneys">Chutneys</option>
              <option value="Starters">Starters</option>
              <option value="Sweets">Sweets</option>
              <option value="Ice Creams">Ice Creams</option>
              <option value="Beverages">Beverages</option>
              <option value="Sandwiches">Sandwiches</option>
              <option value="Burgers">Burgers</option>
              <option value="Snacks">Snacks</option>
              <option value="Cakes">Cakes</option>
              <option value="Desserts">Desserts</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name="price"
              placeholder="Price in Rs."
            />
          </div>
          <div className="add-price flex-col">
            <p>Rating</p>
            <input
              onChange={onChangeHandler}
              value={data.rating}
              type="number"
              name="rating"
              placeholder=""
              required
            />
          </div>
        </div>
        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
