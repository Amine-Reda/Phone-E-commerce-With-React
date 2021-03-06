import React from "react";
import "./Product.css";
import { Image, Button } from "react-bootstrap";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useStateValue } from "../StateProvider";
function Product({ id, img, title, price }) {
  const [{ carts }, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: "ADD TO CART",
      item: { img: img, title: title, price: price, id: id },
    });
  };

  return (
    <div className="product">
      <Image
        className="product__image"
        src={require(`../img/${img}`)}
        alt={title}
      />
      <Button onClick={addToCart} className="product__addButton">
        <AddShoppingCartIcon />
        Add to Cart
      </Button>
      <div className="product__detail">
        <h2>{title}</h2>
        <h2 className="product__detailPrice">{`$${price}`}</h2>
      </div>
    </div>
  );
}

export default Product;
