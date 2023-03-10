import { api } from '@api/index';
import ReqError from '@api/reqError';
import {
  ILogInRequest,
  ILogInResponse,
  IRefreshRequest,
  IRefreshResponse
} from '@models/authModels';

export default class AuthService {
  static async login(body: ILogInRequest) {
    try {
      const response = (await api.post<ILogInResponse>('auth/employee/login', body)).data;

      return response;
    } catch (e: any) {
      throw ReqError.loginError(e.response);
    }
  }

  static async refreshTokens(body: IRefreshRequest) {
    try {
      const response = (await api.post<IRefreshResponse>('auth/employee/login', body)).data;

      return response;
    } catch (e: any) {
      throw ReqError.refreshTokenError(e.response);
    }
  }
}
