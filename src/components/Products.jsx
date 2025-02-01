import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/productsSlice";
import AddProduct from "./AddProduct";

const Products = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts()); // Fetch products when component loads
  }, [dispatch]);

  return (
    <div>
      <h2>Products</h2>
      <AddProduct /> {/* Include AddProduct component */}
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      <ul>
        {items.map((product) => (
          <li key={product.id}>{product.title} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
