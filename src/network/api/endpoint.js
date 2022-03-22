const { process: { env } } = require('dotenv').load()
const { PUBLIC_API_WEATHER } = env

const endpoints = {
    findCity: `${PUBLIC_API_WEATHER}/stats/find_woeid`,
    climate: `${PUBLIC_API_WEATHER}/weather`,
}

export default endpoints;
