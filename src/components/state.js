import { createContext, useState } from "react";

const GlobalContext = createContext();

const initialState = [
  {
    name: "mobile",
    brand: "Samsung",
    price: "Rs 5000",
  },
  {
    name: "mobile",
    brand: "Samsung",
    price: "Rs 5000",
  },
  {
    name: "mobile",
    brand: "Samsung",
    price: "Rs 5000",
  },
  {
    name: "mobile",
    brand: "Samsung",
    price: "Rs 5000",
  },
  {
    name: "mobile",
    brand: "Samsung",
    price: "Rs 5000",
  },
  {
    name: "mobile",
    brand: "Samsung",
    price: "Rs 5000",
  },
  {
    name: "mobile",
    brand: "Samsung",
    price: "Rs 5000",
  },
  {
    name: "mobile",
    brand: "Samsung",
    price: "Rs 5000",
  },
  {
    name: "mobile",
    brand: "Samsung",
    price: "Rs 5000",
  },
  
];

const GlobalContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
