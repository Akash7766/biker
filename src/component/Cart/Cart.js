import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { items, reset, random } = props;

  return (
    <div>
      <div className="cart my-4 p-4">
        <h4 className="text-center ">Please add 4 bikes</h4>
        <div className="py-4">
          <h5>Selected Items</h5>
          <div className="my-5">
            {items.map((item) => (
              <div
                key={item.id}
                className="select-item row d-flex align-items-center bg-custom p-2 mb-2 rounded "
              >
                <div className="col-3">
                  <img className="img-fluid" src={item.img} alt="" />
                </div>
                <div className="col-9">
                  <h6>{item.name}</h6>
                </div>
              </div>
            ))}
          </div>
          <button className="btn btn-primary me-5" onClick={random}>
            Choose One
          </button>
          <button className="btn btn-primary" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
