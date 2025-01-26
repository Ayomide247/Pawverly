import React, { createContext, useReducer, useContext } from "react";
import { cartReducer } from "../fragments/CartReducer";
import { useEffect } from "react";

const CartContext = createContext();

const fetchedCartItem = localStorage.getItem("CartItem");
const currentCartItem = fetchedCartItem ? JSON.parse(fetchedCartItem) : [];

const initialState = {
  cart: currentCartItem,
  totalPrice: 0,
  singleItem: null,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  //   localStorage.setItem("CartItem", JSON.stringify(state.cart));

  const getTotalPrice = () => {
    return state.cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  useEffect(() => {
    localStorage.setItem("CartItem", JSON.stringify(state.cart));
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
