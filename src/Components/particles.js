import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';

var style = {
    width: "100vw",
    height: "100vh",
};


class ParticlesBackground extends Component {

    render() {
        return (
          <div>
            <ParticlesBg color="#164324" num={200} type="cobweb" bg={true} />
          </div>
        );
    }
}

export default ParticlesBackground;
