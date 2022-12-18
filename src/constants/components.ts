import { SnackbarProviderProps } from 'notistack';

export enum SnackStatus {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNUNG = 'warning'
}

export const NotificationProviderOptions: Partial<SnackbarProviderProps> = {
  maxSnack: 3,
  anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
  preventDuplicate: false,
  autoHideDuration: 6000
};
