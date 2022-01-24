import React, { Component } from 'react';
import PlayWidget from 'react-spotify-widgets';

export class Player extends Component {
  render() {
    return (
      <div className='App'>
        <PlayWidget
          width={300}
          height={380}
          uri={'https://open.spotify.com/playlist/7EXWjR31cQzw6OP1atmo3A?si=7cd56c62b8ac4ab7'}
          lightTheme={true}
        />
      </div>
    );
  }
}

export default Player;
