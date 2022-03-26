import React from "react";

const Cart = (props) => {
  const { items } = props;

  return (
    <div>
      <div className="cart my-4 p-3">
        <h4 className="text-center ">Please add 4 bikes</h4>
        <div className="py-4">
          <h5>Selected Items</h5>
          <div className="my-5">
            {items.map((item) => (
              <h6 key={item.id}>{item.name}</h6>
            ))}
          </div>
          <button className="btn btn-primary me-5">Choose One</button>
          <button className="btn btn-primary" onClick={props.reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
