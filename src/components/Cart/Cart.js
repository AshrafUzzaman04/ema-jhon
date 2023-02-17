import React from "react";

const Cart = (props) => {
  const items = props.items;
  //   reduce
  //   const totalPrice = items.reduce((total, prd) => total + prd.price, 0);

  let totalPrice = 0;
  for (let i = 0; i < items.length; i++) {
    const product = items[i];
    totalPrice = totalPrice + product.price;
  }

  //   shipping cost
  let shipping = 0;
  if (totalPrice > 1000) {
    shipping = 20;
  } else if (totalPrice > 400) {
    shipping = totalPrice * (2 / 100);
  } else if (totalPrice < 400) {
    shipping = totalPrice * (5 / 100);
  }

  const tax = (totalPrice * (10 / 100)).toFixed(2);
  const overAllPrice = (totalPrice + shipping + Number(tax)).toFixed(2);

  const formateNumber = (num) => {
    const precision = num.toFixed(2);
    return Number(precision);
  };

  return (
    <>
      <h3>Order Summary</h3>
      <h5>Items Ordered {items.length}</h5>
      <span>Product Price : ${totalPrice}</span>
      <hr />
      <p>
        (+) <small>Shipping Cost: ${formateNumber(shipping)}</small>
      </p>
      <p>
        (+) <b>Tax & Vat : ${tax}</b>
      </p>
      <hr />
      <p>Total Price = ${overAllPrice}</p>
    </>
  );
};

export default Cart;
