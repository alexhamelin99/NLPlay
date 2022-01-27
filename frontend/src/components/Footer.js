import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return <div>
      <div class="text-center fixed-bottom" style={{backgroundColor: "black"}}>
        <div class="container p-1"></div>
        <h5 class="text-center p-2" style={{color: "white"}}>
          © 2021 Copyright : NLPlay
        </h5>
      </div>
    </div>;
  }
}

export default Footer;
