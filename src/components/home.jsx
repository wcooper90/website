import React, { Component } from 'react';
import Introduction from './introduction'
import About from './about'
import Timeline from './timeline'
import Bio from './bio'

export default class Home extends Component {
  render() {
  return (
    <div>
        <Introduction></Introduction>
        <Bio></Bio>
        <Timeline></Timeline>
        <About></About>
    </div>
  );
}
}
