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
                     <li>CS242, Computing at Scale (Fall 2022) </li>
                     <li>CS243, Networks (Fall 2022) </li>
                     <li>CS260r, Close Readings in Software (Distributed Systems)</li>
                     <li>CS286, Multi-Agent Systems</li>
                     <li>Math 21a, Multivariable Calculus</li>
                     <li>Math 21b, Linear Algebra and Differential Equations </li>
                     <li>AM 120, Linear Algebra and Big Data</li>
                     <li>AM121, Optimization and Mathematical Programming</li>
                     <li>STAT110, Statistics and Probability</li>
                     <li>STAT E-150, Intermediate Statistics: Methods and Modeling</li>
                     <li>ESE168, Environmental Data Science</li>
                     <li>ECON10A, Microeconomics</li>
                     <li>CSCI E-33A, Web Programming with Python and Javascript</li>
                     <li>MGMT E-2000, Principles of Finance</li>
                     </p>
                     <p>Beyond studying math, computer science, and the environment, at Harvard College I'm the president of <a href='https://www.hcs.harvard.edu/contact'>Harvard Computer Society </a>
                      (previously director of Education 2019-2021),
                     where I manage a number of subcomittees with a common goal of trying to improve the CS community at Harvard. I play club hockey and club tennis. I sang for two years in the memorial church choir, and
                       am now considering dropping that to audition as a bass guitarist for the Hasty Pudding theatrical band. </p>
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
