import React, { memo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

import { Link } from "react-router-dom";

// Sample Data
const categories = [
  { name: "Earphone", image: "Earphone4.webp" },
  { name: "Camera", image: "/Camera1.jpg" },
  { name: "Headphones", image: "/Headphone1.webp" },
];



const featuredProducts = [
  { id: 1, name: "Earphone", price: "$499", image: "Earphone3.webp" },
  { id: 2, name: "Earphone", price: "$999", image: "Headphone2.webp" },
  { id: 3, name: "Headphones", price: "$199", image: "Headphone1.webp" },
];

const Home = memo(() => {
  const images = [img1, img2, img3, img4];

  return (
    <>
      {/* Hero Carousel */}
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {images.map((img, idx) => (
            <div key={idx} className={`carousel-item ${idx === 0 ? "active" : ""}`}>
              <img src={img} className="d-block w-100" alt={`Slide ${idx + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Featured Products Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Featured Products</h2>
        <div className="row">
          {featuredProducts.map((product) => (
            <div className="col-md-4" key={product.id}>
              <div className="card h-100 shadow-sm">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <h6 className="text-success">{product.price}</h6>
                  <button className="btn btn-primary w-100">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Shop by Category</h2>
        <div className="row">
          {categories.map((category, index) => (
            <div className="col-md-4" key={index}>
              <Link to={`/category/${category.name.toLowerCase()}`} className="category-card">
                <div className="card shadow-sm">
                  <img src={category.image} className="card-img-top" alt={category.name} />
                  <div className="card-body text-center">
                    <h5 className="card-title">{category.name}</h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      

    {/* About Us Section */}
    <div className="container my-5">
        <h2 className="text-center mb-4">About Us</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src="/aboutus.jpg" className="img-fluid rounded shadow" alt="About Us" />
          </div>
          <div className="col-md-6">
            <h3>Welcome to Our Store!</h3>
            <p>
              At <strong>My E-Commerce</strong>, we are dedicated to providing the best quality products at unbeatable prices.
              Our mission is to bring the latest and most innovative gadgets to your doorstep while ensuring customer satisfaction.
            </p>
            <p>
              With years of experience in the industry, we have built a reputation for reliability, quality, and top-notch service.
            </p>
            <Link to="/about" className="btn btn-primary">Learn More</Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-light text-center py-3 mt-4">
        <p>© {new Date().getFullYear()} My E-Commerce. All Rights Reserved.</p>
      </footer>
    </>
  );
});

export default Home;
