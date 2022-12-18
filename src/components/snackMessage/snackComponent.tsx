import { useSnackbar, SnackbarContent } from 'notistack';
import { forwardRef, useCallback } from 'react';
import styles from "./snackComponent.module.scss";
import iconCross from "@icons/cross.svg";
import Svg from '@UI/svg/svg';

const SnackComponent = forwardRef<HTMLDivElement, SnackBarProps>((props, ref) => {
  const {id, message } = props;
  const { closeSnackbar } = useSnackbar();

  const handleDismiss = useCallback(() => {
    closeSnackbar(id);
  }, [id, closeSnackbar]);

  return(
    <SnackbarContent ref={ref}>
      <div className={styles.snackbar__inner}>
        <Svg className={styles.snackbar__closeIcon} 
            color="#7E808F" src={iconCross} 
            width={10} height={10} onClick={handleDismiss} />
        {message}
      </div>
    </SnackbarContent>
  )
})

interface SnackBarProps {
  id: string | number,
  message: any,
}

export default SnackComponent;