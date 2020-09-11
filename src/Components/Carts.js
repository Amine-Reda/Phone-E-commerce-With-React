import React from "react";
import "./Carts.css";
import { useStateValue } from "../StateProvider";
import { Image } from "react-bootstrap";

function Carts() {
  const [{ carts }] = useStateValue();

  return (
    <div className="carts">
      {carts.map((c) => (
        <div className="cart">
          <Image
            className="product__image"
            src={require(`../img/${c.img}`)}
            alt={c.title}
          />
          <div className="cart__content">
            <h2>{c.title}</h2>
            <h2 className="product__detailPrice">{`$${c.price}`}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Carts;
