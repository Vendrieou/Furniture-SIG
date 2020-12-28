const development = process.env.NODE_ENV === 'development'

require('dotenv')
    .config({
        path: development ? '.env' : `.env.${(process.env.NODE_ENV || '').toLocaleLowerCase()}`
    })

module.exports = {
    env: {
        BING_MAP_KEY: process.env.BING_MAP_KEY || ''
    }
}