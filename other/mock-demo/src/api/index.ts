import axios from 'axios';

export const useAxios = axios.create({
  baseURL: 'http://localhost:5001',
});

useAxios.interceptors.request.use((config) => {
  config.headers['token'] = 'xxx';
  return config;
});

export interface Response<T> {
  code: number;
  data: T;
  message: string;
}

useAxios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (err) => {
    console.log('err :>> ', err);
    return Promise.reject(err);
  }
);
