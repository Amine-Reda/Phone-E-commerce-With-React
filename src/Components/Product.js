import React from "react";
import "./Product.css";
import { Image } from "react-bootstrap";

function Product({ img, title, price }) {
  return (
    <div className="product">
      <Image
        className="product__image"
        src={require(`../img/${img}`)}
        alt={title}
      />
      <div className="product__detail">
        <h2>{title}</h2>
        <h2 className="product__detailPrice">{`$${price}`}</h2>
      </div>
    </div>
  );
}

export default Product;
