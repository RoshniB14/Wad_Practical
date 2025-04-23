


import React from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom"; 

const CartPage = () => {
  const { cart, removeFromCart, getTotalPrice } = useCart();

  return (
    <div className="container mt-4">
      <h2 className="text-center">Shopping Cart</h2>
      {cart.length === 0 ? (
        <div className="text-center">
          <p>Your cart is empty.</p>
          <Link to="/" className="btn btn-primary">Continue Shopping</Link>
        </div>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item d-flex justify-content-between align-items-center">
              <img src={item.image} alt={item.name} className="cart-img" style={{ width: "100px" }} />
              <div>
                <h5>{item.name}</h5>
                <p className="text-success">${item.price} x {item.quantity}</p>
              </div>
              <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}
          <h4 className="text-center mt-3">Total: ${getTotalPrice().toFixed(2)}</h4>
        </div>
      )}
    </div>
  );
};

export default CartPage;
