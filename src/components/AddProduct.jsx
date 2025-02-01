import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/productsSlice";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      title,
      price: parseFloat(price),
      category: "electronics", // Example category
      image: "https://via.placeholder.com/150", // Example image
    };
    dispatch(addProduct(newProduct)); // Dispatch action
    setTitle("");
    setPrice("");
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
