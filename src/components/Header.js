import React, { useContext } from "react";
import { GlobalContext } from "./state";
import { useNavigate } from "react-router-dom";
function Header() {
  const { state } = useContext(GlobalContext);
  const navigate = useNavigate();
  return (
    <div className="outer  box-border w-screen bg-green-500">
      <div className="container  box-border w-full border border-green-500 flex flex-wrap items-center justify-center gap-10 text-2xl">
        <p
          className="home  box-border bg-inherit cursor-pointer hover:text-zinc-200"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </p>
        <p
          className="add  box-border bg-inherit cursor-pointer hover:text-zinc-200"
          onClick={() => {
            navigate("/add");
          }}
        >
          Add Product
        </p>
        <p
          className="cart  box-border bg-inherit cursor-pointer hover:text-zinc-200"
          onClick={() => {
            navigate("/cart");
          }}
        >
          Cart
        </p>

        <div
          className="cartDiv box-border flex justify-start items-center gap-2 bg-inherit cursor-pointer hover:text-zinc-200"
          onClick={() => {
            navigate("/cart");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 text-red-700 bg-inherit cursor-pointer hover:text-zinc-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          <p className="qty box-border text-2xl bg-inherit ">
            {state.cartCount}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
