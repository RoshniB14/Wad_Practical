// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css';
// function Home() {
//   return (
//     <div className="home-container">
//       <h1>Welcome to Travel App</h1>
//       <Link to="/add-destination">Add New Destination</Link>
//       <Link to="/destinations">View Destinations</Link>
//     </div>
//   );
// }

// export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkedAlt, FaPlusCircle } from 'react-icons/fa';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">🌍 Welcome to Travel Explorer</h1>
      <p className="home-subtitle">Plan, Add & Explore your dream destinations</p>
      
      <div className="home-buttons">
        <Link to="/add-destination" className="home-link add-link">
          <FaPlusCircle className="icon" />
          Add New Destination
        </Link>
        <Link to="/destinations" className="home-link view-link">
          <FaMapMarkedAlt className="icon" />
          View Destinations
        </Link>
      </div>

      <div className="home-image-section">
        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="Travel" className="home-image" />
      </div>
    </div>
  );
}

export default Home;
