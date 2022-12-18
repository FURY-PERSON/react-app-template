import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';

import SnackComponent from '@components/snackMessage/snackComponent';
import { NotificationProviderOptions } from '@constants/components';
import cssVars from '@constants/var.scss';
import NotificationService from '@services/notification';
import { store } from '@store/store';

import styles from './App.module.scss';
import AppInner from './AppInner';

function App() {
  console.log('cssVars', cssVars);

  return (
    <div className={styles.app}>
      <Provider store={store}>
        <SnackbarProvider
          {...NotificationProviderOptions}
          content={(key, message) => <SnackComponent id={key} message={message} />}>
          <AppInner />

          {NotificationService.mount()}
        </SnackbarProvider>
      </Provider>
    </div>
  );
}

export default App;
