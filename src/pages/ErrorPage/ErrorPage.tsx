import { memo } from "react";
import styles from "./ErrorPage.module.scss";

const ErrorPage = memo(() => {
  return(
    <div className={styles.error}>
      Error page
    </div>
  )
})

export default ErrorPage;