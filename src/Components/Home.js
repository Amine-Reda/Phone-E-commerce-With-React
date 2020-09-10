import React from "react";
import "./Home.css";
import ListPrducts from "./ListProducts";
function Home() {
  return (
    <div className="home">
      <h2 className="home__title">OUR PRODUCTS</h2>
      <ListPrducts />
    </div>
  );
}

export default Home;
