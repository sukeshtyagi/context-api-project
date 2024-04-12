import React, { useContext } from "react";
import { GlobalContext } from "./state";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { state, setState } = useContext(GlobalContext);
  const cartItems = state.cartItems;
  console.log(cartItems);
  const cartTotal = cartItems.reduce(
    (acc, curr) => acc + parseFloat(curr.price),
    0
  );

  const navigate = useNavigate();
  return (
    <div>
      <h1
        className="heading text-left ml-20 text-xl my-8 cursor-pointer hover:text-red-300"
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </h1>
      <h1 className="heading text-center text-xl font-semibold my-8">
        Items In Cart
      </h1>
      <div className="flex justify-center items-center gap-16 mb-4">
        <p>Name</p>
        <p>Brand</p>
        <p>Price</p>
      </div>
      {cartItems.map((item, index) => (
        <div
          key={index}
          className="flex justify-center items-center  gap-16 mb-1 "
        >
          <p className="text-left">{item.name}</p>
          <p className="text-left">{item.brand}</p>
          <p className="text-left">{item.price}</p>
          <p
            className="text-left bg-red-400 px-4 py-px rounded-lg text-white"
            onClick={() => {
              setState((prevState) => ({
                ...prevState,
                cartItems: prevState.cartItems.filter(
                  (item, idx) => idx !== index
                ),
              }));
            }}
          >
            Remove
          </p>
        </div>
      ))}
      <p className="total text-center text-2xl text-pink-900 text-bold mt-6">Total Amount Payable :{cartTotal}</p>
    </div>
  );
}

export default Cart;
