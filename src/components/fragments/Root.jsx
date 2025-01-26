import React from "react";
import App from "../../App";
import { CartProvider } from "./CartContext";

const Root = () => {
  return (
    <CartProvider>
      <App />
    </CartProvider>
  );
};

export default Root;
