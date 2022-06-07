import React from 'react'
import '../index.css'
import HeadShot from './photos/headshot.PNG'
import { Image2 } from './styles'


const Sidebar2 = () => {
    return (
      <div>
        <div className='color'>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
            <Image2 src={HeadShot}/>
              <h1 id="colorlib-logo"><a href="index.html">William Cooper </a></h1>
              <span className="email"><i className="icon-mail"></i>wcooper@college.harvard.edu</span>
              <br/>
            </div>
            <nav id="colorlib-main-menu">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="/" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                  <li><a href="#education" data-nav-section="education">Education</a></li>
                  <li>_____</li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="/projects">Technical Projects</a></li>
                <li><a href="/photos">Photos</a></li>
                <li><a href="/portfolio">Miscellaneous</a></li>
              </ul>
            </nav>
            <br/>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.facebook.com/profile.php?id=100017215244708" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="https://www.instagram.com/will_fully/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                <li><a href="https://www.linkedin.com/in/william-cooper-868342191/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/wcooper90" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  Made with <i className="icon-heart" aria-hidden="true" /><br></br>
                  Inspiration for this website from  <a href="https://github.com/dbarochiya" target="_blank" rel="noopener noreferrer">Dhruv</a>
              </small></p>
            </div>
          </aside>
        </div>
      </div>

    )
}

export default Sidebar2
