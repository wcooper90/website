import React from 'react'
import '../index.css'
import HeadShot from './photos/headshot.PNG'
import { Image2 } from './styles'


const Sidebar = () => {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
          <div className="text-center">
            <Image2 src={HeadShot}/>
              <h1 id="colorlib-logo"><a href="index.html">William Cooper </a></h1>
              <span className="email"><i className="icon-mail"></i>wcooper@college.harvard.edu</span>
              <br/>
            </div>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="/">Home</a></li>
                <li>______</li>
                <li><a href="/projects">Technical Projects</a></li>
                <li><a href="/photos">Photos</a></li>
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

export default Sidebar
