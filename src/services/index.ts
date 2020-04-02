import axios from 'axios';
import { get } from 'lodash';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: '/mock-request/'
});

instance.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    // configurations here
    return config;
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    // configurations here
    return new Promise(resolve =>
      setTimeout(() => {
        return resolve(get(response, 'data') || response);
      }, 2000)
    );
  },
  async (error: any) => {
    // configurations here
    return Promise.reject(get(error, 'response.data'));
  }
);

export default instance;
