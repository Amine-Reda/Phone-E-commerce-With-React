import React from "react";
import "./Cart.css";
import { useStateValue } from "../StateProvider";

function Cart() {
  const [{ cart }] = useStateValue();
  console.log(cart);
  return <div></div>;
}

export default Cart;
