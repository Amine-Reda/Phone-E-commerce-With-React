import React from "react";
import "./ListProducts.css";
import Product from "./Product";
import { storeProducts } from "../data";
function ListProducts() {
  return (
    <div className="listProducts">
      {storeProducts.map((product) => (
        <Product
          img={product.img}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default ListProducts;
