import axios from 'axios';

const { REACT_APP_API_URL } = process.env;
export const axiosInstance = axios.create({ baseURL: `${REACT_APP_API_URL}/api`, withCredentials: true });

axiosInstance.interceptors.request.use(
  (request) => {
    console.log(
      `${new Date()} | Request: ${request.method} | ${request.url} | ${JSON.stringify(request.data)} | ${JSON.stringify(
        request.headers,
      )}`,
    );
    return request;
  },
  (error) => {
    console.log('Error: ', JSON.stringify(error.response, null, 2));
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    const print = `${new Date()} | Response: ${JSON.stringify(response.status, null, 2)} | ${JSON.stringify(
      response.data,
    )}`;
    console.log(print);
    return response;
  },
  (error) => {
    console.log('Error Response: ', JSON.stringify(error.response, null, 2));
    return Promise.reject(error);
  },
);
