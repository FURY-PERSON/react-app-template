import { api } from '@api/index';
import ReqError from '@api/reqError';
import { IGetUsersRequest, IGetUsersResponse } from '@models/userModel';

export default class UserService {
  static async getUsers(request: IGetUsersRequest) {
    try {
      const response = (
        await api.get<IGetUsersResponse>('users', {
          params: {
            id: request.id
          }
        })
      ).data;

      return response;
    } catch (e: any) {
      throw ReqError.getUsersError(e.response);
    }
  }
}
