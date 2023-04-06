import { AxiosRequestHeaders, Method } from 'axios';

export type ApiRequestConfig = {
    path: string;
    method: Method;
    params?: any;
};

export type ApiEndpointConfig = {
    baseURL: string;
    headers: any;
};
