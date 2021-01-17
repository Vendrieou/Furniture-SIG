import React from 'react'
import BingMap from '../../components/Map/BingMap'
import { truncStr } from '../../utils/string'
import { BING_MAP_KEY } from '../../utils/config'

const map = ({ SigData }) => {
    const pinData = SigData.map((item) => {
        return {
                title: item.name,
                text: "",
                description: truncStr(item.description, 20),
                item: 
                {
                    altitude: 0,
                    altitudeReference: -1,
                    latitude: item.mapData.lat,
                    longitude: item.mapData.long
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
