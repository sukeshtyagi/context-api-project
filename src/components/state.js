import { createContext, useState } from "react";

const GlobalContext = createContext();

const initialState = {
  products: [
    {
      name: "tv",
      brand: "Samsung",
      price: " 5000",
    }, {
      name: "refrigerator",
      brand: "Samsung",
      price: " 5000",
    }, {
      name: "led",
      brand: "Samsung",
      price: " 5000",
    }, {
      name: "washing machine",
      brand: "Samsung",
      price: " 5000",
    }, {
      name: "trimmer",
      brand: "Samsung",
      price: " 5000",
    }, {
      name: "home theatre",
      brand: "Samsung",
      price: " 5000",
    }, {
      name: "speaker",
      brand: "Samsung",
      price: " 5000",
    }, {
      name: "mobile",
      brand: "Samsung",
      price: " 5000",
    },
  ],
  cartItems: [],

  cartCount: 0,
};

const GlobalContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
