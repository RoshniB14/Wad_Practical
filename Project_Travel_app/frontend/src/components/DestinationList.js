// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// function DestinationList() {
//   const [destinations, setDestinations] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchDestinations = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/destinations');
//         setDestinations(response.data);
//       } catch (error) {
//         setError('Failed to load destinations');
//       }
//     };
//     fetchDestinations();
//   }, []);

//   if (error) {
//     return <p>{error}</p>;
//   }

//   return (
//     <div>
//       <h2>Destination List</h2>
//       <Link to="/add-destination">Add New Destination</Link>
//       {destinations.length === 0 ? (
//         <p>No destinations available.</p>
//       ) : (
//         <ul>
//           {destinations.map((destination) => (
//             <li key={destination._id}>
//               <h3>{destination.name}</h3>
//               <p>Location: {destination.location}</p>
//               <p>Description: {destination.description}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default DestinationList;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaSearch, FaPlusCircle } from 'react-icons/fa';
import './style.css';

function DestinationList() {
  const [destinations, setDestinations] = useState([]);
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/destinations');
        setDestinations(response.data);
        setFilteredDestinations(response.data);
      } catch (error) {
        setError('Failed to load destinations');
      } finally {
        setLoading(false);
      }
    };
    fetchDestinations();
  }, []);

  useEffect(() => {
    const filtered = destinations.filter(d =>
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.location.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredDestinations(filtered);
  }, [search, destinations]);

  if (error) return <p className="error-text">{error}</p>;

  return (
    <div className="destination-container">
      <div className="destination-header">
        <h2>Explore Destinations</h2>
        <Link to="/add-destination" className="add-destination-link">
          <FaPlusCircle /> Add New
        </Link>
      </div>

      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search by name or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <p>Loading destinations...</p>
      ) : filteredDestinations.length === 0 ? (
        <p>No destinations found.</p>
      ) : (
        <div className="destination-grid">
          {filteredDestinations.map(destination => (
            <div className="destination-card" key={destination._id}>
              <h3>{destination.name}</h3>
              <p><FaMapMarkerAlt className="icon" /> {destination.location}</p>
              <p className="description">{destination.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DestinationList;
