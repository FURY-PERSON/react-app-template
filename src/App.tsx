import { SnackbarProvider } from 'notistack';
import cssVars from "@constants/var.scss";
import styles from './App.module.scss';
import SnackComponent from '@components/snackMessage/snackComponent';
import NotificationService from '@services/notification';
import AppInner from './AppInner';
import { Provider } from "react-redux";
import { store } from '@store/store';
import { NotificationProviderOptions } from '@constants/components';

function App() {
  console.log('cssVars', cssVars);

  return (
    <div className={styles.app}>
      <Provider store={store}>
        <SnackbarProvider
          {...NotificationProviderOptions}
          content={(key, message) => <SnackComponent id={key} message={message}/>}
          >
            <AppInner />
            
            {NotificationService.mount()}
        </SnackbarProvider>

      </Provider>
    </div>
  );
}

export default App;
