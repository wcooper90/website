import React, { Component } from 'react'
import { C2, C1, C21, C12, Image, Card, Bio, Name} from './styles'
import Prom from './photos/bruh1.jpg'
import Cardnic from './photos/1.jpg'
import Chef from './photos/2.jpg'
import Bike from './photos/6.png'
import Mai from './photos/bruh3.jpg'
import Tennis from './photos/4.jpg'
import Hockey from './photos/5.jpg'
import Blocking from './photos/bruh2.jpg'
import Dolores from './photos/9.jpg'
import Skydiving from './photos/10.jpg'
import Hardsummer from './photos/11.jpg'
import Stowe from './photos/12.jpg'
import Bowling from './photos/8.jpg'
import Met from './photos/5-31.PNG'
import Conway from './photos/5-12.PNG'
import X from './photos/12-2.jpg'
import '../index.css'

export default class Images extends Component {
  render() {
    return (
      <div>
        <C1>
        <br />
          <h2> Photos!</h2>
        </C1>
        <C2>
          <Card>
            <Image src={Met} />
            <Name>Hamlet at the Met with uChoir </Name>
            <Bio>
              May 31st, 2022
            </Bio>
          </Card>
          <Card>
            <Image src={Conway} />
            <Name>Trip to North Conway with friends</Name>
            <Bio>
              May 12th, 2022
            </Bio>
          </Card>
        </C2>
        <C2>
          <Card>
            <Image src={X} />
            <Name>2021 X Formal </Name>
            <Bio>
              December 2nd, 2021
            </Bio>
          </Card>
          <Card>
            <Image src={Hardsummer} />
            <Name>Hard Summer </Name>
            <Bio>
              Aug 1st, 2021
            </Bio>
          </Card>
        </C2>
        <C12>
          <Card>
            <Image src={Skydiving} />
            <Name>Sky Diving Aftermath</Name>
            <Bio>
              Jul 18th, 2021
            </Bio>
          </Card>
          <Card>
            <Image src={Bowling} />
            <Name>Bowling Squad </Name>
            <Bio>
              Jul 21st, 2021
            </Bio>
          </Card>
        </C12>
        <C12>
          <Card>
            <Image src={Dolores} />
            <Name>Funny Joke in Dolores Park</Name>
            <Bio>
              Jun 18th, 2021
            </Bio>
          </Card>
          <Card>
            <Image src={Cardnic} />
            <Name>Visit to Ithaca </Name>
            <Bio>
              Oct 4th, 2020
            </Bio>
          </Card>
        </C12>
        <C2>
        <Card>
          <Image src={Chef} />
          <Name>Cooking Class</Name>
          <Bio>
            Oct 16th, 2020
          </Bio>
        </Card>
          <Card>
            <Image src={Stowe} />
            <Name>Snowboarding at Stowe</Name>
            <Bio>
              Jan 5th, 2021
            </Bio>
          </Card>
        </C2>
        <C21>
        <Card>
          <Image src={Mai} />
          <Name>Me and Mai </Name>
          <Bio>
            Mar 12th, 2020
          </Bio>
        </Card>
          <Card>
            <Image src={Blocking} />
            <Name>My Blocking Group</Name>
            <Bio>
              Mar 13th, 2020
            </Bio>
          </Card>
        </C21>
        <C1>
          <Card>
            <Image src={Prom} />
            <Name>High School Prom </Name>
            <Bio>
              May 18th, 2019
            </Bio>
          </Card>
        </C1>
        <C1>
        <Card>
          <Image src={Tennis} />
          <Name>CRLS Tennis</Name>
          <Bio>
            May 1st, 2019
          </Bio>
        </Card>
        </C1>
        <C12>
        <Card>
          <Image src={Hockey} />
          <Name>CRLS Ice Hockey</Name>
          <Bio>
            Feb 13th, 2019
          </Bio>
        </Card>
          <Card>
            <Image src={Bike} />
            <Name>Google Bike</Name>
            <Bio>
              Aug 10th, 2018
            </Bio>
          </Card>
        </C12>
      </div>
    )
  }
}
