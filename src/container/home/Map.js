import React from 'react'
import BingMap from '../../components/Map/BingMap'
import { BING_MAP_KEY } from '../../utils/config'

const map = ({ SigData }) => {
    const pinData = SigData.map((item) => {
        return {
                title: item.name,
                text: "",
                description: item.description,
                item: 
                {
                    altitude: 0,
                    altitudeReference: -1,
                    latitude: item.lat,
                    longitude: item.long
                }
            }
    })

    return (
        <BingMap
            mapOptions={{
                center: [3.586467301483079, 98.68950745798949],
            }}
            bingMapKey={BING_MAP_KEY}
            pushPin={pinData}
        />
    )
}

export default map
