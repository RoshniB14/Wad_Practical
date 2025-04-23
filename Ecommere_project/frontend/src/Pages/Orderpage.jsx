
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OrderPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    if (!state) {
      navigate("/"); 
    } else {
      setOrder(state);
    }
  }, [state, navigate]);

  if (!order) {
    return <h2 className="text-center my-5">Loading Order Details...</h2>;
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4">Order Confirmation</h2>
      <div className="card">
        <div className="card-body">
          <h5>Product: {order.product}</h5>
          <h6 className="text-success">Price: ${order.price}</h6>
          <h6>Payment Method: {order.paymentMethod}</h6>

          <div className="alert alert-success mt-4">
            ✅ Your order has been placed successfully!
          </div>

          <button className="btn btn-primary mt-3" onClick={() => navigate("/")}>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
