import React, { useContext } from "react";
import { GlobalContext } from "./state";

function Cart() {
  const { state, setState } = useContext(GlobalContext);
  const cartItems = state.cartItems;
  console.log(cartItems);
  return (
    <div>
      <h1 className="heading text-center text-xl font-semibold my-8">Items In Cart</h1>
      <div className="flex justify-center items-center gap-16 mb-4">
        <p>Name</p>
        <p>Brand</p>
        <p>Price</p>
      </div>
      {cartItems.map((item, index) => (
        <div key={index} className="flex justify-center items-center  gap-16 ">
          <p className="text-left">{item.name}</p>
          <p className="text-left">{item.brand}</p>
          <p className="text-left">{item.price}</p>
          <p className="text-left bg-red-400"
          onClick={() => {
            setState((prevState) => ({
              ...prevState,
              cartItems: prevState.cartItems.filter((item, idx) => idx !== index),
            }));
          }}
          >Remove</p>
        </div>
      ))}
    </div>
  );
}

export default Cart;
