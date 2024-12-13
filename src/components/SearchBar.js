// src/components/SearchBar.js
import React, { useContext, useState } from 'react';
import WeatherContext from './WeatherContext';

const SearchBar = () => {
  const { setSearchQuery } = useContext(WeatherContext); // Using context here
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    setSearchQuery(query); // Update the search query in the context
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update local state for query
        placeholder="Enter city"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
