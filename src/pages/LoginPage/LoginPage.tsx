import { memo, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

import NotificationService from '@services/notification';
import { useGetUsersQuery } from '@slices/userApiSlice';

import styles from './LoginPage.module.scss';

const LoginPage = memo(() => {
  const loaderData = useLoaderData();
  const [id, setId] = useState<number | undefined>();
  /*   console.log(loaderData); */

  const navigate = useNavigate();

  const { data, error, isLoading, isFetching } = useGetUsersQuery({ id });
  /*   console.log('data', data) */

  const onClick = () => {
    navigate('404');
  };

  const onPlusClick = () => {
    setId((id || 0) + 1);
  };

  const onMinusClick = () => {
    const extId = id || 0;
    setId(extId - 1 >= 1 ? extId - 1 : 1);
  };

  const onClickNotification = () => {
    NotificationService.success('click');
  };

  return (
    <div className={styles.login}>
      <p>Login</p>
      <div>
        <Link to={'/404'}>NOT FOUND</Link>
      </div>
      <div>
        <button onClick={onClick}>Redurect</button>
      </div>
      <div>
        <button onClick={onClickNotification}>Notification</button>
      </div>
      <div onClick={onPlusClick}>
        <button>+</button>
      </div>
      <div onClick={onMinusClick}>
        <button>-</button>
      </div>
      <div>id: {id}</div>
      <div>isFetching: {isFetching}</div>
    </div>
  );
});

export default LoginPage;
