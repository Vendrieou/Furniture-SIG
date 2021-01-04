import React from 'react'
import BingMap from '../../components/Map/BingMap'
import { BING_MAP_KEY } from '../../utils/config'

const map = () => {
    return (
        <BingMap
            mapOptions={{
                center: [3.586467301483079, 98.68950745798949],
            }}
            bingMapKey={BING_MAP_KEY}
            // height="auto"
        />
    )
}

export default map
