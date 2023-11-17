// Offer.js
import React from "react";
import { useLocation } from "react-router-dom";

const Offer = ({ carName, price, color }) => {
  // Accessing the state from the location object
  const { state } = useLocation();

  return (
    <div>
      <h2>Offer Page</h2>
      <p>Car Name: {carName}</p>
      <p>Price: ${price}</p>
      <p>Color: {color}</p>
      {state && <p>Value from state: {state.someProp}</p>}
    </div>
  );
};

export default Offer;
