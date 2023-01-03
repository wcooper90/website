import React, { Component } from 'react'
import '../index.css'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="education">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">---</span>
                    <h2 className="colorlib-heading">Education</h2>

                     <p> Technical/Relevant coursework from high school and college: <br / >
                     <li>CS50, Introduction to Computer Science </li>
                     <li>CS61, Systems Programming and Machine Organization </li>
                     <li>CS124, Data Structures and Algorithms </li>
                     <li>CS182, Artificial Intelligence </li>
                     <li>CS229r, Topics in Theoretical Computer Science: Biology and Complexity (Spring 2023)</li>
                     <li>CS242, Computing at Scale </li>
                     <li>CS243, Networks </li>
                     <li>CS260r, Close Readings in Software (Distributed Systems)</li>
                     <li>CS262, Distributed Systems (Spring 2023) </li>
                     <li>CS286, Multi-Agent Systems</li>
                     <li>Math 21a, Multivariable Calculus</li>
                     <li>Math 21b, Linear Algebra and Differential Equations </li>
                     <li>AM115, Mathematical Modeling (Spring 2023) </li>
                     <li>AM120, Linear Algebra and Big Data</li>
                     <li>AM121, Optimization and Mathematical Programming</li>
                     <li>STAT110, Statistics and Probability</li>
                     <li>STAT E-150, Intermediate Statistics: Methods and Modeling</li>
                     <li>ESE168, Environmental Data Science</li>
                     <li>ECON10A, Microeconomics</li>
                     <li>CSCI E-33A, Web Programming with Python and Javascript</li>
                     <li>MGMT E-2000, Principles of Finance</li>
                     </p>
                     <p>I also play club hockey and club tennis! I sang for two years in the memorial church choir, and am now a bass guitarist for the Hasty Pudding theatrical band. </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about" data-section="clickables">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">---</span>
                <h2 className="colorlib-heading">Some things I like</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className='make-it-slow'>
              <a href='/projects'>
                <div className="col-md-4 text-center animate-box">
                    <div className="services color-1">
                    <span className="icon">
                        <i className="icon-data" />
                    </span>
                    <div className="desc">
                        <h3>Technical Projects </h3>
                        <p>Click here to see some (cool?) projects. </p>
                    </div>
                  </div>
              </div>
            </a>
            </div>
            <a href='/photos'>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Photos</h3>
                    <p>Just me enjoying myself. </p>
                </div>
                </div>
            </div>
            </a>
            <a href='/portfolio'>
              <div className="col-md-4 text-center animate-box">
                  <div className="services color-3">
                  <span className="icon">
                      <i className="icon-bulb" />
                  </span>
                  <div className="desc">
                      <h3>Miscellaneous</h3>
                      <p> Not really sure where I'm going with this yet. </p>
                  </div>
                  </div>
              </div>
            </a>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
