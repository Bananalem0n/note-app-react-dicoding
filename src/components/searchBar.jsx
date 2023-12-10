// SearchBar.js
import React from "react";
import "../styles/search.css";

const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <input
    className="input-field search"
    type="text"
    placeholder="Search Notes"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
);

export default SearchBar;
