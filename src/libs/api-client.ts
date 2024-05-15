import Axios, { type InternalAxiosRequestConfig } from 'axios';
import { toast } from 'sonner';

import { env } from '@/configs/env';

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  if (config.headers) {
    config.headers.Accept = 'application/json';
  }
  return config;
}

export const api = Axios.create({
  baseURL: env.VITE_APP_API_URL,
});

api.interceptors.request.use(authRequestInterceptor);
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message = error.response?.data?.message ?? error.message;
    toast.error('Error', {
      description: message,
    });
    return Promise.reject(error);
  },
);
