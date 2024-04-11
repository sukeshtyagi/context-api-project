import React, { useState, useContext } from "react";
import { GlobalContext } from "./state";
import {useNavigate} from 'react-router-dom'

function AddProduct() {
const navigate=useNavigate()
  const { state, setState } = useContext(GlobalContext);
  const products = state.products;

  const [newProduct, setNewProduct] = useState({
    name: "",
    brand: "",
    price: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setNewProduct((newProduct) => ({
      ...newProduct,
      [name]: value,
    }));
  };
  return (
    <div className="box-border w-fit m-auto p-8 my-10 flex flex-col gap-5 justify-center items-center border border-red-500">
      <h1>Product Details</h1>
      <input
        type="text"
        name="name"
        className="border border-black bg-teal-100 px-2 py-px"
        value={newProduct.name}
        placeholder="Enter Name"
        onChange={handleInput}
      />
      <input
        type="text"
        name="brand"
        className="border border-black bg-teal-100 px-2 py-px"
        value={newProduct.brand}
        placeholder="Enter Brand"
        onChange={handleInput}
      />
      <input
        type="text"
        name="price"
        className="border border-black bg-teal-100 px-2 py-px"
        value={newProduct.price}
        placeholder="Enter Price"
        onChange={handleInput}
      />
      <button
        className="box-border bg-yellow-300 rounded px-4 py-1 cursor-pointer hover:bg-yellow-500"
        onClick={() => {
          setState((state) =>({
            ...state,
            products:[...state.products,newProduct]
          }));
          navigate('/')
        }}
      >
        Add Product
      </button>
    </div>
  );
}

export default AddProduct;
