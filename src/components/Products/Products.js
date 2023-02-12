/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Products = (props) => {
  const { name, img, seller, price, stock } = props.alldata;
  return (
    <div>
      <div className="product">
        <div className="image">
          <img src={img} alt="" />
        </div>
        <div className="pricing">
          <h3>
            <a href="#">{name}</a>
          </h3>
          <span>By: {seller}</span>
          <br />
          <br />
          <span className="price">${price}</span>
          <p>only {stock} left in stock- order soon</p>
          <button onClick={() => props.handleAddProduct(props.alldata)}>
            <FontAwesomeIcon icon={faShoppingCart} /> add to chart
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Products;
