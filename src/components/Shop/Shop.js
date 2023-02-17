import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import fakeData from "../../fakeData/products.json";
import Products from "../Products/Products";
import "./Shop.css";
import Cart from "../Cart/Cart";

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [porducts, addProducts] = useState(first10);
  const [cart, setCart] = useState([]);

  // event handler
  const handleAddProduct = (e) => {
    const newCart = [...cart, e];
    setCart(newCart);
  };

  return (
    <div className="shop_container">
      <div className="left_container">
        <h1>
          <FontAwesomeIcon icon={faStar} style={{ color: "black" }} /> Shop Now
        </h1>
        {porducts.map((pd) => (
          <Products
            key={pd.id}
            alldata={pd}
            handleAddProduct={handleAddProduct}
          ></Products>
        ))}
      </div>
      <div className="right_container">
        <div className="all_data">
          <Cart items={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
