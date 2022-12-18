import { IBrowserNotificationService } from './notificationService.interface';
import SnackNotification from './snackNotification';

const NotificationService: IBrowserNotificationService = new SnackNotification();

export default NotificationService;
