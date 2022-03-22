import { get } from '../httpRequestAxio/httRequestAxio';
import endpoints from './endpoint';

const { findCity, climate } = endpoints


const getWoeid = function(city = 'São paulo') {
    const params = {
        key: '17284dd0',
        format: 'json-cors',
        sdk_version: 'console',
        city_name: city
    };
    
    const res = get(findCity, params);
    if (res.code === 200) {
        return res.data.woeid;
    }

    return { code: 500 };
}

const getClimate = function(woeid = 455827) {
    const params = { woeid: woeid }

    const res = get(climate, params);
    if (res.code === 200) {
        return res.data;
    }

    return { code: 500 };
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    async getClimateByCity(city) {
        const woeid = await getWoeid(city)

        if(woeid) {
            return await getClimate(woeid);
        }
        
        return { woeid: 'NOT_READ' }
    }
};
