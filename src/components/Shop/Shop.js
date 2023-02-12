import React, { useState } from "react";
import fakeData from "../../fakeData/products.json";
import Products from "../Products/Products";
import "./Shop.css";

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [porduct, setProduct] = useState(first10);

  return (
    <div className="shop_container">
      <div className="left_container">
        <h1>Shop Now</h1>
        {porduct.map((pro) => (
          <Products allproduct={pro}></Products>
        ))}
      </div>
      <div className="right_container">
        <h2>Order Summary</h2>Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Quibusdam delectus veritatis dolor dolorem illo
        explicabo animi ducimus facere saepe quis? Est possimus magni
        voluptatibus ipsum consequuntur sint quae aliquid deserunt dolore
        delectus, optio nihil eveniet, sapiente ullam voluptates velit
        recusandae reiciendis itaque? Repudiandae nulla illo blanditiis quaerat
        delectus accusantium error.
      </div>
    </div>
  );
};

export default Shop;
