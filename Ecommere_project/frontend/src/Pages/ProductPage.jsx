
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom"; 

const ProductPage = () => {
  const { addToCart } = useCart(); 
  const navigate = useNavigate(); 

  // Product list
  const products = [
    { id: 1, name: "Smartwatch", price: 799, image: "/Smartwatch1.webp", description: "Latest model with high-end features." },
    { id: 2, name: "Smartwatch", price: 499, image: "/Smartwatch2.webp", description: "Latest model with high-end features." },
    { id: 3, name: "Smartwatch", price: 399, image: "/Smartwatch3.webp", description: "Stay connected and track your fitness effortlessly." },
    { id: 4, name: "Smartphone", price: 1899, image: "/Smartphone1.webp", description: "Latest model with high-end features" },
    { id: 5, name: "Smartphone", price: 1499, image: "/Smartphone2.webp", description: "Latest model with high-end features." },
    { id: 6, name: "Smartphone", price: 999, image: "/Smartphone3.webp", description: "Latest model with high-end features." },
    { id: 7, name: "Earphone", price: 899, image: "/Earphone1.webp", description: "Latest model with high-end features." },
    { id: 8, name: "Earphone", price: 330, image: "/Earphone2.webp", description: "Latest model with high-end features." },
    { id: 9, name: "Earphone", price: 999, image: "/Earphone3.webp", description: "Latest model with high-end features." },
  ];

  // Function to handle "Buy Now"
  const handleBuyNow = (product) => {
    navigate("/payment", { state: { product } }); // Navigate to PaymentPage with product details
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Featured Products</h2>
      <div className="row g-4">
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="card h-100 shadow-sm">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <h6 className="text-success">${product.price}</h6>
                <button className="btn btn-primary w-100 mb-2" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
                <button className="btn btn-outline-secondary w-100" onClick={() => handleBuyNow(product)}>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
