import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL

});

axiosInstance.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
  
        if (error.response.status === 404)
            error.message = 'Not Found'
        else if (error.response.status === 400)
            error.message = 'Bad Request'
        else if (error.response.status === 403)
            error.message = 'Forbidden'
        else if (error.response.status === 500)
            error.message = 'Internal Server Error'
        else if (error.response.status === 502)
            error.message = ' Bad Gateway'

        return Promise.reject(error);
    }
);

export default axiosInstance;
