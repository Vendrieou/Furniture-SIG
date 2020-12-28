import React from 'react'
import styled from 'styled-components'
// import BingMapsReact from 'bingmaps-react'
import { ReactBingmaps } from 'react-bingmaps';

import { BING_MAP_KEY } from '../utils/config.js'

const Wrapper = styled.main`
  width: 100%
  height: 100%
`

const pinData = [
  {
    location: [3.586467301483079, 98.68950745798949],
    option: {
      color: 'red'
    }
  }
  // "addHandler": {
  //   "type": "click",
  //   callback: this.callBackMethod
  // }
]
// const pinData = [
//   {
//     title: 'STMIK TIME',
//     description: 'jl. Merbabu',
//     item:
//     {
//       altitude: 0,
//       altitudeReference: -1,
//       latitude: 3.586467301483079,
//       longitude: 98.68950745798949
//     }
//   },
//   {
//     title: 'eka prasetya',
//     description: 'jl. Merapi',
//     item:
//     {
//       altitude: 0,
//       altitudeReference: -1,
//       latitude: 3.586021588203511,
//       longitude: 98.68678501601073
//     }
//   }
// ]

const BingMap = ({ ...props }) => (
  <Wrapper>
    <ReactBingmaps
      bingmapKey={BING_MAP_KEY}
      center={[3.554418, 98.688181]}
      pushPins={pinData}
    >
    </ReactBingmaps>
    {/* <BingMapsReact
      // bingMapsKey="1a2b3c4d5e6f7g8h9i0j"
      bingMapsKey={BING_MAP_KEY}
      pushPinsWithInfoboxes={pinData}
      height="500px"
      mapOptions={{
        navigationBarMode: 'square'
      }}
      width="500px"
      viewOptions={{
        center: { latitude: 3.554418, longitude: 98.688181 },
        // center: { latitude: 42.360081, longitude: -71.058884 },
        mapTypeId: 'grayscale'
      }}
      {...props}
    /> */}
  </Wrapper>
)

export default BingMap
