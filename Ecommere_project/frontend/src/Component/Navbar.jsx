
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "../assets/logo.png";



const Navbar = () => {
  
  const isAdmin = localStorage.getItem("adminToken"); 

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-white">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/signin">Sign In</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/signup">Sign Up</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/productpage">View Products</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/cart"><i class="bi bi-cart"></i></Link></li>
              <li className="nav-item"><Link className="nav-link" to="/adminpanel"><i class="bi bi-person-circle"></i></Link></li>
              
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
