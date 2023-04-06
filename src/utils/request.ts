import axios, { Method } from 'axios';
const axiosClient = axios.create({
    timeout: 2000,
});

const request = async (
    path: string,
    method?: Method,
    params?: any,
    body?: any
) => {
    const url = `${process.env.YELP_API_URL}/${path}`;
    try {
        const response = await axiosClient.request({
            url,
            method,
            data: body,
            params,
        });
        console.log('axios response', response);
        return response;
    } catch (err: any) {
        console.log(err);
        throw err;
    }
};

export default request;
