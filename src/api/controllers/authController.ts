import AuthService from '@api/services/authService';
import { ILogInRequest, IRefreshRequest } from '@models/authModels';

export default class AuthController {
  static async login(req: ILogInRequest) {
    return AuthService.login(req);
  }

  static async refreshTokens(req: IRefreshRequest) {
    return AuthService.refreshTokens(req);
  }
}
