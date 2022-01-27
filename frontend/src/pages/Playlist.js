import React from 'react';
import { NavLink } from 'react-router-dom';
import Player from '../components/dasboard/Player';
import logo from '../images/logo.png'
import './Playlist.css';
;




function Playlist() {
  return <div className='container '>
    <h1 className='mt-4'>Mes Playlist</h1>
    <div className='row mt-5 justify-content-center'>
        <div class="card playlist col-md-3 m-4 mt-2" style={{paddingRight: 0, paddingLeft: 0, borderRadius: 15}}>
          <a href='https://open.spotify.com/playlist/7EXWjR31cQzw6OP1atmo3A?si=7cd56c62b8ac4ab7' exact target="_blank">
            <img src={logo} class="card-img-top"style={{borderRadius: 15, borderBottomRightRadius: 0, borderBottomLeftRadius: 0}}/>
            <div class="card-body">
              <p class="card-text">sous-thème: </p>
            </div>
          </a>
        </div>
        <div class="card playlist col-md-3 m-4 mt-2" style={{paddingRight: 0, paddingLeft: 0, borderRadius: 15}}>
          <a href='https://open.spotify.com/playlist/7EXWjR31cQzw6OP1atmo3A?si=7cd56c62b8ac4ab7' exact target="_blank">
            <img src={logo} class="card-img-top"style={{borderRadius: 15, borderBottomRightRadius: 0, borderBottomLeftRadius: 0}}/>
            <div class="card-body">
              <p class="card-text">sous-thème: </p>
            </div>
          </a>
        </div>
        <div class="card playlist col-md-3 m-4 mt-2" style={{paddingRight: 0, paddingLeft: 0, borderRadius: 15}}>
          <a href='https://open.spotify.com/playlist/7EXWjR31cQzw6OP1atmo3A?si=7cd56c62b8ac4ab7' exact target="_blank">
            <img src={logo} class="card-img-top"style={{borderRadius: 15, borderBottomRightRadius: 0, borderBottomLeftRadius: 0}}/>
            <div class="card-body">
              <p class="card-text">sous-thème: </p>
            </div>
          </a>
        </div>
        <div class="card playlist col-md-3 m-4 mt-2" style={{paddingRight: 0, paddingLeft: 0, borderRadius: 15}}>
          <a href='https://open.spotify.com/playlist/7EXWjR31cQzw6OP1atmo3A?si=7cd56c62b8ac4ab7' exact target="_blank">
            <img src={logo} class="card-img-top"style={{borderRadius: 15, borderBottomRightRadius: 0, borderBottomLeftRadius: 0}}/>
            <div class="card-body">
              <p class="card-text">sous-thème: </p>
            </div>
          </a>
        </div>
        <div class="card playlist col-md-3 m-4 mt-2" style={{paddingRight: 0, paddingLeft: 0, borderRadius: 15}}>
          <a href='https://open.spotify.com/playlist/7EXWjR31cQzw6OP1atmo3A?si=7cd56c62b8ac4ab7' exact target="_blank">
            <img src={logo} class="card-img-top"style={{borderRadius: 15, borderBottomRightRadius: 0, borderBottomLeftRadius: 0}}/>
            <div class="card-body">
              <p class="card-text">sous-thème: </p>
            </div>
          </a>
        </div>
        <div class="card playlist col-md-3 m-4 mt-2" style={{paddingRight: 0, paddingLeft: 0, borderRadius: 15}}>
          <a href='https://open.spotify.com/playlist/7EXWjR31cQzw6OP1atmo3A?si=7cd56c62b8ac4ab7' exact target="_blank">
            <img src={logo} class="card-img-top"style={{borderRadius: 15, borderBottomRightRadius: 0, borderBottomLeftRadius: 0}}/>
            <div class="card-body">
              <p class="card-text">sous-thème: </p>
            </div>
          </a>
        </div>
    </div>
  </div>;
}

export default Playlist;
