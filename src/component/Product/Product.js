import React from "react";

const Product = (props) => {
  const { name, id, price, img } = props.product; //Distructating
  const { handleAddToCart, product } = props;

  return (
    <div className="col">
      <div className="card h-100">
        <img src={img} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">price : {price}</p>
        </div>
        <button onClick={() => handleAddToCart(id)} className="btn btn-primary">
          Add to cart
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-bag-dash-fill ms-2"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM6 9.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Product;
