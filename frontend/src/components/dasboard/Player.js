import React, { Component } from 'react';
import PlayWidget from 'react-spotify-widgets';

export class Player extends Component {
  render() {
    return (
        <PlayWidget
          width= {this.props.width}
          height={this.props.height}
          uri={this.props.url}
          lightTheme={true}
        />
    );
  }
}

export default Player;
