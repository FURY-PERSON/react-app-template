import { ILogInRequest, IRefreshRequest } from '@models/authModels';
import AuthService from '@api/services/authService';

export default class AuthController {
  static async login(req: ILogInRequest) {
    return await AuthService.login(req);
  }

  static async refreshTokens(req: IRefreshRequest) {
    return await AuthService.refreshTokens(req);
  }
}