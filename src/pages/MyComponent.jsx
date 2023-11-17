import React from "react";
import { useLocation } from "react-router-dom";

const MyComponent = () => {
  // Access the location object
  const location = useLocation();

  // Properties of the location object
  const { pathname, search, state } = location;

  // Access state values (if any)
  const { productId, category } = state || {};

  return (
    <div>
      <h2>Current Location Information:</h2>
      <p>Pathname: {pathname}</p>
      <p>Search: {search}</p>

      {state && (
        <div>
          <h2>State Information:</h2>
          <p>Product ID: {productId}</p>
          <p>Category: {category}</p>
        </div>
      )}
    </div>
  );
};

export default MyComponent;
