import React, { Component }  from 'react';
import { Container3, C2, Image, Name, Bio, Card } from './styles'
import Satellite from './project_photos/satellite.png'
import Nbrief from './project_photos/nbrief.png'
import Cambridge from './project_photos/Cambridge.JPG'
import Astro from './project_photos/Astro.JPG'
import Mai from './project_photos/Mai.JPG'
import MIT from './project_photos/MIT.JPG'
import CSV from './project_photos/CSV.PNG'
import CS286 from './project_photos/CS286.PNG'
import CS260 from './project_photos/CS260.PNG'


export default class Projects extends Component {
  render() {
    return (
      <div>
        <Container3>
          <h1> Projects! </h1>
          <h4> Project cards will link to more info soon. </h4>
          <h4><a href='https://www.github.com/wcooper90'> Github Link </a></h4>
        </Container3>
        <C2>
          <Card>
            <Image src={CS286} />
            <Name></Name>
            <Bio>
              Probabilistic Sampling Methods and Collision Avoidance for Robot Swarms in Mass Casualty Incidents (MCI)
            </Bio>
          </Card>
          <Card>
            <Image src={CS260} />
            <Name></Name>
            <Bio>
              The Effects of Virtualization on Apache Spark
            </Bio>
          </Card>
        </C2>
        <C2>
          <Card>
            <Image src={Satellite} />
            <Name></Name>
            <Bio>
              Surface Coverage Classification
            </Bio>
          </Card>
          <Card>
            <Image src={Nbrief} />
            <Name></Name>
            <Bio>
              nBrief: Research Productivity Enhancement
            </Bio>
          </Card>
        </C2>
        <C2>
          <Card>
            <Image src={Astro} />
            <Name></Name>
            <Bio>
              n-body Astroid Trajectories
            </Bio>
          </Card>
          <Card>
            <Image src={MIT} />
            <Name></Name>
            <Bio>
              MIT Eneryhack: 2019 4th place, 2020 3rd place
            </Bio>
          </Card>
        </C2>
        <C2>
          <Card>
            <Image src={Cambridge} />
            <Name></Name>
            <Bio>
              Cambridge Local First Social Media Data Analysis
            </Bio>
          </Card>
          <Card>
            <Image src={Mai} />
            <Name></Name>
            <Bio>
              Computer Vision Assisted Contour Animation
            </Bio>
          </Card>
        </C2>
        <C2>
          <Card>
            <Image src={CSV} />
            <Name></Name>
            <Bio>
              Cambridge School Volunteers Website Development
            </Bio>
          </Card>
        </C2>
      </div>
    )
  }
}
