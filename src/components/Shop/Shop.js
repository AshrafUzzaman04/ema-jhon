import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import fakeData from "../../fakeData/products.json";
import Products from "../Products/Products";
import "./Shop.css";

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [porducts, addProducts] = useState(first10);
  const [cart, setCart] = useState([]);

  // event handler
  const handleAddProduct = (e) => {
    console.log("Product added", e);
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
          <h2>Order Summary {cart.length}</h2>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          delectus veritatis dolor dolorem illo explicabo animi ducimus facere
          saepe quis? Est possimus magni voluptatibus ipsum consequuntur sint
          quae aliquid deserunt dolore delectus, optio nihil eveniet, sapiente
          ullam voluptates velit recusandae reiciendis itaque? Repudiandae nulla
          illo blanditiis quaerat delectus accusantium error.
        </div>
      </div>
    </div>
  );
};

export default Shop;
