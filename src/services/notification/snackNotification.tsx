import { WithSnackbarProps, useSnackbar } from 'notistack';

import SnackbarMessage from '@components/snackMessage/snackbarItem/snackbarMessage';
import { SnackStatus } from '@constants/components';

import { IBrowserNotificationService } from './notificationService.interface';

class SnackNotification implements IBrowserNotificationService {
  static instance?: SnackNotification;

  private useSnackbarRef?: WithSnackbarProps;

  constructor() {
    if (!SnackNotification.instance) {
      SnackNotification.instance = this;
    }
  }

  mount() {
    const Notificator: React.FC = () => {
      this.useSnackbarRef = useSnackbar();
      return null;
    };

    return <Notificator />;
  }

  success(msg: string) {
    this.getInstance().addNotification(msg, SnackStatus.SUCCESS);
  }

  warning(msg: string) {
    this.getInstance().addNotification(msg, SnackStatus.WARNUNG);
  }

  error(msg: string) {
    this.getInstance().addNotification(msg, SnackStatus.ERROR);
  }

  private addNotification(msg: string, status: SnackStatus) {
    this.getInstance().useSnackbarRef?.enqueueSnackbar(
      SnackbarMessage({ status: status, message: msg }),
      { preventDuplicate: true }
    );
  }

  private getInstance() {
    if (!SnackNotification.instance) {
      SnackNotification.instance = this;
    }

    return SnackNotification.instance;
  }
}

export default SnackNotification;
