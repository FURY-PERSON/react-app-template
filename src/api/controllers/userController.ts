import UserService from '@api/services/userService';
import { IGetUsersRequest } from '@models/userModel';

export default class UserController {
  static async getUsers(req: IGetUsersRequest) {
    return UserService.getUsers(req);
  }
}
