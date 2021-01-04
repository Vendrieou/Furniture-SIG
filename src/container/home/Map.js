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
            pushPin={
                [
                    {
                        title: 'STMIK TIME',
                        text: 'STMIK TIME',
                        description: 'jl. Merbabu',
                        item: 
                        {
                            altitude: 0,
                            altitudeReference: -1,
                            latitude: 3.586467301483079,
                            longitude: 98.68950745798949
                        }
                    },
                    {
                        title: 'eka prasetya',
                        description: 'jl. Merapi',
                        item:
                        {
                            altitude: 0,
                            altitudeReference: -1,
                            latitude: 3.586021588203511,
                            longitude: 98.68678501601073
                        }
                    }
                ]
            }
        />
    )
}

export default map
