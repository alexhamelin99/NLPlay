import React, { useContext } from 'react';
import Player from '../components/dasboard/Player';
import TopPlaylist from '../components/dasboard/TopPlaylist';
import GraphAPI from '../components/dasboard/GraphAPI';
import Footer from '../components/Footer';
import './Accueil.css';
import { MusicContext } from './UserContext';




function Accueil() {
    const {music, setMusic} = useContext(MusicContext);
    
  return <div>
    <div className='container'>
        <div className='row mt-3' >
            <div className='col-md-8 m-2' >
                <div className="card text-dark bg-light">
                    <div className="card-header">Graph</div>
                    <div className="card-body">
                        <GraphAPI/>
                    </div>
                </div>
            </div>
            <div className="col-md m-2">
                    <div className="card text-dark bg-light mb-2" style={{height: "55%"}}>
                        <div class="card-header">
                            Info Musique
                        </div>
                        <div className='card-body'>
                            {music != null ? 
                                <div>
                                    <h5>{music.song_name}</h5>
                                </div>
                                :
                                <h5>Aucune musique n'est actuellement recherchée...</h5>
                            }
                        </div>
                    </div>
                    <div className='player'> 
                        <Player width="100%" height='250' url="https://open.spotify.com/playlist/40xjbm7u6nOuZHpzPvJIv6?si=9469de50480347b7"/>
                    </div>
            </div> 
        </div>
    </div>
    <Footer/>
  </div>;
}

export default Accueil;
