import React from 'react';
import Player from '../components/dasboard/Player';

function Playlist() {
  return <div className='container row align-self-center m-4' style={{height : "100%"}}>
    <div class="card col-3 m-3">
      <div class="card-body">
        <Player/>
      </div>
    </div>
  </div>;
}

export default Playlist;
