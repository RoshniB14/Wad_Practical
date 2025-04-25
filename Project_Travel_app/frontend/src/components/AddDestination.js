
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaGlobe, FaInfoCircle } from 'react-icons/fa';
import './style.css';

function AddDestination() {
  const [form, setForm] = useState({ name: '', location: '', description: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    if (!form.name || !form.location || !form.description) {
      setError('Please fill in all fields.');
      setLoading(false);
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/destinations', form);
      setSuccess(true);
      setForm({ name: '', location: '', description: '' });
      setTimeout(() => {
        navigate("/destinations");
      }, 2000);
    } catch (err) {
      setError('Failed to add destination. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-container">
      <h2>Add a New Destination</h2>
      <form onSubmit={handleSubmit} className="add-form">
        <div className="form-group">
          <FaMapMarkerAlt className="icon" />
          <input
            name="name"
            placeholder="Destination Name"
            onChange={handleChange}
            value={form.name}
          />
        </div>

        <div className="form-group">
          <FaGlobe className="icon" />
          <input
            name="location"
            placeholder="Location"
            onChange={handleChange}
            value={form.location}
          />
        </div>

        <div className="form-group">
          <FaInfoCircle className="icon" />
          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
            value={form.description}
            rows="4"
          ></textarea>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Destination'}
        </button>
      </form>

      {success && <div className="toast success">✅ Destination added successfully!</div>}
      {error && <div className="toast error">❌ {error}</div>}
    </div>
  );
}

export default AddDestination;
