export interface INotificationService {
  success: (msg: string) => void;
  warning: (msg: string) => void;
  error: (msg: string) => void;
}

export interface IBrowserNotificationService extends INotificationService {
  mount: () => JSX.Element;
}
