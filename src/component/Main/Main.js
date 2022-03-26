import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import "../Cart/Cart.css";
import Product from "../Product/Product";

const Main = () => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("bikes.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const handleAddToCart = (id) => {
    if (cart.length >= 4) {
      alert("You cant add above 4 products");
    } else {
      if (cart.includes(id)) {
      } else {
        const newCart = [...cart, id];
        setCart(newCart);
      }
    }
  };
  let storeData = [];
  for (const id of cart) {
    let newData = product.find((item) => item.id == id);
    storeData = [...storeData, newData];
  }
  const reset = () => {
    setCart([]);
  };
  const random = () => {
    const randomElement = cart[Math.floor(Math.random() * cart.length)];
    for (const item of product) {
      if (item.id === randomElement) {
        setCart([item.id]);
      }
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-9">
          <div className="row row-cols-1 row-cols-md-3 g-4 p-4">
            {product.map((item) => (
              <Product
                key={item.id}
                product={item}
                handleAddToCart={handleAddToCart}
              ></Product>
            ))}
          </div>
        </div>
        <div className="col-md-3">
          <Cart items={storeData} reset={reset} random={random}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Main;
