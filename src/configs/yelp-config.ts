import { ApiEndpointConfig } from '../types';

export const yelpConfig: ApiEndpointConfig = {
    baseURL: 'https://api.yelp.com/v3/',
    headers: {
        Authorization: `Bearer ${process.env.YELP_API_KEY}`,
    },
};
