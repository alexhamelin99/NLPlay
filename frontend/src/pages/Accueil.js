import React from 'react';
import Player from '../components/dasboard/Player';
import TopPlaylist from '../components/dasboard/TopPlaylist';

function Accueil() {
  return <div>
    <h1>Accueil</h1>
    <div className='container'>
        <div className='row'>
            <div className="card text-dark bg-light col-md-8 m-2">
                <div className="card-header">Graph</div>
                <div className="card-body">
                </div>
            </div>
            <div className="mb-3 col-md m-2">
                <div>
                    <Player></Player>
                </div>
                <div className="card text-dark bg-light">
                    <div class="card-header">
                        TOP 3 Playlist
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><TopPlaylist></TopPlaylist></li>
                        <li class="list-group-item"><TopPlaylist></TopPlaylist></li>
                        <li class="list-group-item"><TopPlaylist></TopPlaylist></li>
                    </ul>
                </div>
            </div> 
        </div>
    </div>
  </div>;
}

export default Accueil;
