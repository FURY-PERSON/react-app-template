import axios, {AxiosRequestConfig} from 'axios';
import AuthController from './controllers/authController';

const URL = process.env.REACT_APP_API_URL;

export const api = axios.create({
  withCredentials: false,
  baseURL: URL,
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers!.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
  config.headers!.Accept = 'application/json';
  config.headers!['Content-Type'] = 'application/json';

  return config;
});

api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && error.config && !originalRequest._isRetry) {
      originalRequest._isRetry = true;
      localStorage.removeItem('accessToken');
      const refreshToken = localStorage.getItem('refreshToken');

      if (refreshToken) {
        const response = await AuthController.refreshTokens({refreshToken: 'rrr'});
        if (response) {
          return api.request(originalRequest);
        }
      } else {
        window.location.hash = '#/login';
      }
    }
    throw error;
  }
);

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  email: string;
}
