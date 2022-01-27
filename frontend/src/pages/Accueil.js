import React from 'react';
import Player from '../components/dasboard/Player';
import TopPlaylist from '../components/dasboard/TopPlaylist';
import GraphAPI from '../components/dasboard/GraphAPI';
import Footer from '../components/Footer';
import './Accueil.css';


function Accueil() {
  return <div>
    <div className='container'>
        <div className='row mt-3' >
            <div className='col-md-8 m-2' >
                <div className="card text-dark bg-light" style={{height: "100%"}}>
                    <div className="card-header">Graph</div>
                        <GraphAPI/>
                    <div className="card-body">
                    </div>
                </div>
            </div>
            <div className="col-md m-2">
                    <div className='player'> 
                        <Player width="100%" height='250' url="https://open.spotify.com/playlist/7EXWjR31cQzw6OP1atmo3A?si=7cd56c62b8ac4ab7"/>
                    </div>
                    <div className="card text-dark bg-light" >
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
    <Footer/>
  </div>;
}

export default Accueil;
