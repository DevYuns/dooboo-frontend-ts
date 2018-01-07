import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import RootStackNavigator from '@navigation/RootStackNavigator';
import Store from '@stores/appStore';
import Localization from '@models/Localization';

// tslint:disable-next-line:no-var-requires
const store = new Store();
store.user.checkLoginStatus();

if (navigator) {
  const userLang: string = navigator.language;
  const localization = new Localization();
  localization.setLocale(userLang);
  store.setLocale(localization);
}

ReactDOM.render(
  <Provider store={store}>
    <RootStackNavigator />
  </Provider>,
  document.getElementById('app'),
);
