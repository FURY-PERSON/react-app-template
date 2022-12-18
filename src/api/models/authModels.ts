export interface ILogInRequest {
  email: string;
  password: string;
}
export interface ILogInResponse {
  refreshToken: string;
  accessToken: string;
}

export interface IRefreshRequest {
  refreshToken: string;
}
export interface IRefreshResponse {
  refreshToken: string;
  accessToken: string;
}
