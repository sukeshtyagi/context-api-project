import React, { useContext } from "react";
import Header from "./Header";
import { GlobalContext } from "../components/state";

function Home() {

  const { state } = useContext(GlobalContext);
  console.log(state);

  return (
    <div className="outer w-screen flex flex-col m-auto">
      <Header />
      <table className="w-1/2 mx-auto border-spacing-5">
        <thead>
          <tr>
            <th className="px-2 py-2 border text-center">Name</th>
            <th className="px-2 py-2 border text-center">Brand</th>
            <th className="px-2 py-2 border text-center">Price</th>
            <th className="px-2 py-2 border text-center">Add</th>
          </tr>
        </thead>
        <tbody>
          {state.map((item, index) => (
            <tr key={index}>
              <td className="px-2 py-2 border text-center">{item.name}</td>
              <td className="px-2 py-2 border text-center">{item.brand}</td>
              <td className="px-2 py-2 border text-center">{item.price}</td>
              <td className="px-2 py-2 border text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-center mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
