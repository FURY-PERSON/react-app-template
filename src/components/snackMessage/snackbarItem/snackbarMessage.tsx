import { SnackStatus } from "@constants/components";
import Svg from "@UI/svg/svg";
import styles from "./snackbarMessage.module.scss";

// do not use react hooks inside
const SnackbarMessage = (props: SnackbarItemProps) => {
  const {message, status} = props;

  const icons = {
    [SnackStatus.SUCCESS]: '',
    [SnackStatus.ERROR]: '',
    [SnackStatus.WARNUNG]: '',
  }

  const colors = {
    [SnackStatus.SUCCESS]: '',
    [SnackStatus.ERROR]: '',
    [SnackStatus.WARNUNG]: '',
  }

  const statusName = {
    [SnackStatus.SUCCESS]: 'Done!',
    [SnackStatus.ERROR]: 'Error',
    [SnackStatus.WARNUNG]: 'Warning',
  }

  return(
    <div className={styles.message}>
      <div style={{backgroundColor: colors[status]}} className={styles.line}></div>

      <div style={{backgroundColor: colors[status]}} className={styles.iconWrapper}>
        <Svg src={icons[status]} width={14} height={14}
            color='#fff' className={styles.icon}/>
      </div>

      <div className={styles.textWrapper}>
        <div className={styles.status}>{statusName[status]}</div>
        <div className={styles.text}>{message}</div>
      </div>
    </div>
  )
}

export interface SnackbarItemProps {
  status: SnackStatus,
  message: any,
}

export default SnackbarMessage;