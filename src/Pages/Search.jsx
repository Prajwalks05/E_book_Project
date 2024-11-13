// src/pages/Search.jsx
import React from 'react';
import './Search.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { WiDayThunderstorm } from 'react-icons/wi';

const Search = () => {
  const handleSearch = () => {
    // Placeholder for search functionality
    console.log('Search button clicked');
  };

  return (
    <div className="row mt-5 justify-content-center">
      <div className="col-md-4">
        <input type="text" className="form-control" placeholder="Enter Book Name" />
      </div>
      <div className="col-md-4">
        <select className="form-control">
          <option value="all">Title</option>
          <option value="author">Author</option>
          <option value="year">Year</option>
        </select>
      </div>
      <div className="col-lg-2">
        <button
          className="btn btn-outline-success rounded-pill"
          id="search-button"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div >
  );
};

export default Search;