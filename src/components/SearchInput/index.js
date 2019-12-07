import React, { useState } from 'react';
import './style.css';
const SearchInput = ({ handleSearch }) => {
  //   const [value, setValue] = useState();

  const handleChange = e => {
    // setValue(e.target.value);
    // searchValue(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <input
      onChange={handleChange}
      className="input-field"
      placeholder="search..."
    />
  );
};

export default SearchInput;
