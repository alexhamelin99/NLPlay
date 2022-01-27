import React from 'react';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function SearchBar({placeholder, data}) {
  return <div className='search'>
    <div className='searchInputs'>
      <input className='text'placeholder={placeholder}/>
      <div className='searchIcon'><FontAwesomeIcon className='icon' icon={faSearch}/></div>
    </div>
    <div className='dataResult'>
    </div>
  </div>;
}

export default SearchBar;
