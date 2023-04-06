import { ApiEndpointConfig, ApiRequestConfig } from '../types';
import axios, { AxiosInstance, Method } from 'axios';

class ApiClient {
    axios: AxiosInstance;
    constructor({ baseURL, headers }: ApiEndpointConfig) {
        this.axios = axios.create({
            baseURL,
            headers,
        });
    }
    async request({ path, params, method }: ApiRequestConfig) {
        try {
            const response = await this.axios.request({
                url: path,
                method,
                params,
            });
            console.log('client response', response);
            return response;
        } catch (err: any) {
            console.log(err);
            throw err;
        }
    }
}

export default ApiClient;
