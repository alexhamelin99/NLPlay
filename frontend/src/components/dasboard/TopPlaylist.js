import React, { Component } from 'react';
import PlayWidget from 'react-spotify-widgets';

export class TopPlaylist extends Component {
  render() {
    return <div>
      <PlayWidget
          width="100%"
          height={70}
          uri={'https://open.spotify.com/playlist/7EXWjR31cQzw6OP1atmo3A?si=7cd56c62b8ac4ab7'}/>
      </div>
  }
}

export default TopPlaylist;
