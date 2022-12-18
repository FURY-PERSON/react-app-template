import { memo } from 'react';

import styles from './NotFoundPage.module.scss';

const NotFoundPage = memo(() => {
  return <div className={styles.notFound}>Not Found 404</div>;
});

export default NotFoundPage;
