import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddDestination from './components/AddDestination';
import DestinationList from './components/DestinationList';

function App() {
  return (
    <Router>  {/* Router is used here to handle routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-destination" element={<AddDestination />} />
        <Route path="/destinations" element={<DestinationList />} />
      </Routes>
    </Router>
  );
}

export default App;
