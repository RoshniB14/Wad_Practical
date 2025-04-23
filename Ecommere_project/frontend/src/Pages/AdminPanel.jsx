
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminPanel = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/signin";
  };

  // Remove order from the state and localStorage
  const removeOrder = (orderId) => {
    const updatedOrders = orders.filter(order => order.id !== orderId);
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">User Profile</h5>
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="" className="nav-link">Dashboard</Link>
                </li>
                <li className="list-group-item">
                  <Link to="" className="nav-link">Orders</Link>
                </li>
                <li className="list-group-item">
                  <Link to="" className="nav-link">Settings</Link>
                </li>
                <li className="list-group-item">
                  <button className="btn btn-danger w-100" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-9">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title mb-4"> Dashboard</h3>

              <h5>Orders</h5>
              {orders.length > 0 ? (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Payment Method</th>
                      <th>Status</th>
                      <th>Actions</th> 
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{order.product}</td>
                        <td>${order.price}</td>
                        <td>{order.paymentMethod}</td>
                        <td>{order.status}</td>
                        <td>
                          {/* Remove button */}
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => removeOrder(order.id)}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>No orders yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;