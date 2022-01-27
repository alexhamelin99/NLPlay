import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';

import './Navbar.css';
import logo from '../images/logo.png';
import SearchBar from './SearchBar';




export class NavBar extends Component {
  render() {
    return <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                <img className='mr-4' src={logo} href="/" style={{height: "7%", width: "7%"}} />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-4">
                        <li className="nav-item mx-3">
                            <NavLink className="nav-link" activeClassName="is-active" to="/" exact><h4>Accueil</h4></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="is-active" to="/playlist" exact><h4>Playlist</h4></NavLink>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <SearchBar placeholder="Entrer une musique"/>
                    </form>
                </div>
            </div>
        </nav>
    </div>
    }
}

export default NavBar;
