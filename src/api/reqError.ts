import NotificationService from '@services/notification';

export default class ReqError extends Error {
  status: number;

  errorMessage: string;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.errorMessage = message;
  }

  static loginError(error: ErrorFromService) {
    NotificationService.error(error.data.message);
    return error.data.message ? new ReqError(error.data.statusCode, error.data.message) : error;
  }

  static refreshTokenError(error: ErrorFromService) {
    NotificationService.error(error.data.message);
    return error.data.message ? new ReqError(error.data.statusCode, error.data.message) : error;
  }

  static getUsersError(error: ErrorFromService) {
    NotificationService.error(error?.data?.message);
    return error?.data?.message ? new ReqError(222, 'aaaaa') : error;
  }
}

interface ErrorFromService {
  data: { message: string; statusCode: number };
}
