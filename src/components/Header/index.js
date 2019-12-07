import React from 'react';
import SearchInput from '../SearchInput';
import './style.css';

const Header = ({ searchKey }) => (
  <div className="topnav">
    <a className="active" href="#">
      Movies
    </a>
    <a href="#">TV Shows </a>
    <a href="#">Celebrities</a>
    <a href="#">Watch List</a>
    <SearchInput handleSearch={searchKey} />
  </div>
);

export default Header;
