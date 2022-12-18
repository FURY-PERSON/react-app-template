import { memo } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

import NotificationService from '@services/notification';

import styles from './LoginPage.module.scss';

const LoginPage = memo(() => {
  const loaderData = useLoaderData();
  console.log(loaderData);
  const navigate = useNavigate();

  const onClick = () => {
    navigate('404');
  };

  const onClickNotification = () => {
    NotificationService.success('click');
  };

  return (
    <div className={styles.login}>
      Login
      <Link to={'/404'}>NOT FOUND</Link>
      <button onClick={onClick}>Redurect</button>
      <button onClick={onClickNotification}>Notification</button>
    </div>
  );
});

export default LoginPage;
