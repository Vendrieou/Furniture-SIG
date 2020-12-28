import React from 'react'
import BingMap from '../../components/BingMap/BingMap'
import { BING_MAP_KEY } from '../../utils/config'

const map = () => {
    return (
        <>
            <BingMap
                mapOptions={{
                    center: [3.586467301483079, 98.68950745798949],
                    credentials: BING_MAP_KEY
                }}
            />
        </>
    )
}

export default map
