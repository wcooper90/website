import React, { Component } from 'react';
import ReactTextTransition, { presets } from 'react-text-transition';

class Header extends Component {
  render() {
    const hStyle = { color: '#fad5b9' };

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Images</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">
              <p style={hStyle}>
                <ReactTextTransition
                   text="Will Cooper"
                   spring={presets.wobbly}
                   delay={800}
                   inline="false"
                 />
              </p>
             </h1>
             <br></br>
            <div class="delay">
              <h3>
                I'm an undergraduate student studying applied math and computer science at Harvard University. </h3>
              <hr />
            </div>
            <div class="delay">
              <ul className="social">
                 {networks}
              </ul>
            </div>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
