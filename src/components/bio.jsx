import React, { Component } from 'react'
import '../index.css'


export default class Bio extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">---</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>My name is Will, and I study applied mathematics and computer science at Harvard College. I've just finished my sophomore year (2021-2022) and am also preparing to pursue a concurrent
                       master's degree in Computer Science, and a secondary in Energy and the Environment.
                    </p>
                    <p>I'm particularly interested in the intersection of economics and computer science, as well as the intersection of environmental studies and computer science.
                     I love music (I play piano, bass guitar), tennis, ice hockey, and sports in general.
                     I like to have fun, do new things, and meet new people.
                     If you'd like to be in contact for any reason at all, email me! Promise I'll respond as quickly as possible. For a more detailed list of skills and experiences, you can download my
                     resume from the carousel above.
                     </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
