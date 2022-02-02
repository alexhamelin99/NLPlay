import React, { useContext } from 'react';
import Player from '../components/dasboard/Player';
import TopPlaylist from '../components/dasboard/TopPlaylist';
import GraphAPI from '../components/dasboard/GraphAPI';
import Footer from '../components/Footer';
import './Accueil.css';
import { MusicContext } from './UserContext';
import { Pie } from 'react-chartjs-2';
import FullHeight from "react-full-height";

import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);




function Accueil() {
    const {music, setMusic} = useContext(MusicContext);
    
    const data = {
        maintainAspectRatio: true,
        responsive: true,
        datasets: [
          {
            data: [music.topic_1*100, music.topic_2*100, music.topic_3*100, music.topic_4*100, music.topic_5*100, music.topic_6*100],
            backgroundColor: ["#0074D9", "#FF4136", "#2ECC40", "#FF851B", "#7FDBFF", "#B10DC9"],
          }
        ]
      };

      var options = {
        plugins: {
        tooltip:{
        callbacks:{
            label: (data) => { 
                return Math.round(data.parsed) +"%"
          }

        }
        }
        }
      }


  return <div>
    <div className='container-fluid' >
        <div className='row mt-3' >
            <div className='col-md-8 m-2' >
                <div className="card text-dark bg-light" style={{height: "100%"}}>
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
                            {music != 0 ? 
                                <div >
                                    <h5>{music.song_name}, {music.artist_name} ({music.release_date})</h5>
                                    <div className='pie'>
                                        <Pie
                                            data={data}
                                            options={options}
                                        />
                                    </div>
                                    
                                </div>
                                :
                                <h5>Aucune musique n'est actuellement recherchée...</h5>
                            }
                        </div>
                    </div>
                    <div className='player' > 
                        <Player width="100%" height='250' url="https://open.spotify.com/playlist/40xjbm7u6nOuZHpzPvJIv6?si=9469de50480347b7"/>
                    </div>
            </div> 
        </div>
    </div>
  </div>;
}

export default Accueil;
