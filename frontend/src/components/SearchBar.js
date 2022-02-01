import React, { useState, useEffect,Component, useContext } from 'react'
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { MusicContext } from '../pages/UserContext';



function SearchBar({placeholder, data}) {
  const [filter, setFilter] = useState([]);
  const [word, setWord] = useState("");
  const {music, setMusic} = useContext(MusicContext);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWord(searchWord);
    const newFilter = data.filter((value) => {
      return value.song_name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilter([]);
    } else {
      setFilter(newFilter);
    }
  }

  const clear = () => {
    setFilter([]);
    setWord("");
  }

  const handleClick = (value) => {
    setFilter([]);
    setWord("");
    setMusic(value);
  }

  return <div className='search'>
    <div className='searchInputs'>
      <input className='text'placeholder={placeholder} value={word} onChange={handleFilter}/>
      <div className='searchIcon'>
        {word === "" ? <FontAwesomeIcon className='icon' icon={faSearch}/> : <FontAwesomeIcon className='icon' icon={faTimes} id="clearBtn" onClick={clear}/>}
        </div>
    </div>
    {filter.length != 0 &&
        <div className='dataResult'>
          {filter.slice(0, 15).map((value) => {
            return <a className='dataItem' onClick={() => handleClick(value)}> <p>{value.song_name}</p>  </a>
          })}
        </div>
      }
  </div>;
}

export default SearchBar;
