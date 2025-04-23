

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
  const { state } = useLocation(); 
  const navigate = useNavigate();
  const product = state?.product;

  // If product data is missing, redirect to the homepage
  if (!product) {
    return (
      <div className="container my-5 text-center">
        <h2 className="text-danger">⚠ Error: No product selected</h2>
        <button className="btn btn-primary mt-3" onClick={() => navigate("/Productpage")}>
          Back to Products
        </button>
      </div>
    );
  }

  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    phone: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("");
  const [message, setMessage] = useState("");
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleConfirmOrder = () => {
    if (!shippingInfo.name || !shippingInfo.address  || !shippingInfo.zip || !shippingInfo.phone) {
      setMessage("❌ Please fill in all the shipping details!");
      return;
    }

    if (!paymentMethod) {
      setMessage("❌ Please select a payment method!");
      return;
    }

    // Create order details
    const newOrder = {
      id: Date.now(), // Unique Order ID
      product: product.name,
      price: product.price,
      total: product.price ,
      shippingInfo,
      paymentMethod,
      status: "shipped"||"succes"||"pending",
    };

   
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    localStorage.setItem("orders", JSON.stringify([...existingOrders, newOrder]));

   
    setMessage(`✅ Order Confirmed via ${paymentMethod}!`);
    setTimeout(() => {
      navigate("../AdminPanel", { state: newOrder });
    }, 2000);
  };

  return (
    <div className="container my-5">
      
      {/* Product Details */}
      <div className="card shadow-lg mb-4">
        <div className="card-body">
          <h4>Product: {product.name}</h4>
          <p className="text-muted">{product.description}</p>
          <h5>Price: ${product.price}</h5>
          <h4>Total: ${product.price }</h4>
        </div>
      </div>

      {/* Shipping Information */}
      <div className="card shadow-lg mb-4">
        <div className="card-body">
          <h5>Shipping Information</h5>
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={shippingInfo.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                name="address"
                value={shippingInfo.address}
                onChange={handleInputChange}
                required
              />
            </div>
           
            <div className="mb-3">
              <label className="form-label">ZIP Code</label>
              <input
                type="text"
                className="form-control"
                name="zip"
                value={shippingInfo.zip}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                value={shippingInfo.phone}
                onChange={handleInputChange}
                required
              />
            </div>
          </form>
        </div>
      </div>

      {/* Payment Method Selection */}
      <div className="card shadow-lg mb-4">
        <div className="card-body">
          <h5>Select Payment Method</h5>
          <div>
            <label className="me-3">
              <input
                type="radio"
                name="paymentMethod"
                value="UPI"
                checked={paymentMethod === "UPI"}
                onChange={handlePaymentMethodChange}
              />{" "}
              UPI
            </label>
            <label className="ms-3">
              <input
                type="radio"
                name="paymentMethod"
                value="Credit Card"
                checked={paymentMethod === "Credit Card"}
                onChange={handlePaymentMethodChange}
              />{" "}
              Credit Card
            </label>
            <label className="ms-3">
              <input
                type="radio"
                name="paymentMethod"
                value="Net Banking"
                checked={paymentMethod === "Net Banking"}
                onChange={handlePaymentMethodChange}
              />{" "}
              Net Banking
            </label>
          </div>
        </div>
      </div>

      {/* Order Confirmation */}
      <div className="card shadow-lg mb-4">
        <div className="card-body">
          <button
            className="btn btn-success w-100"
            onClick={handleConfirmOrder}
          >
            Confirm Order
          </button>

       
          {message && (
            <div className="alert alert-info mt-4" role="alert">
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Payment;



