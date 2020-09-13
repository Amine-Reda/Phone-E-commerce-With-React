import React from "react";
import "./Carts.css";
import { useStateValue } from "../StateProvider";
import { Button, Image } from "react-bootstrap";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";

function Carts() {
  const [{ carts }, dispatch] = useStateValue();

  const removeItem = (id) => {
    dispatch({
      type: "REMOVE FROM THE CART",
      id: id,
    });
  };

  return (
    <div className="carts">
      <h1>Cart</h1>

      {carts.map((c) => (
        <div key={c.id} className="cart">
          <Image
            className="product__image"
            src={require(`../img/${c.img}`)}
            alt={c.title}
          />
          <Button
            onClick={() => {
              removeItem(c.id);
            }}
          >
            <RemoveShoppingCartIcon />
            Remove
          </Button>
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
