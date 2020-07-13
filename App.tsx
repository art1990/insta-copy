// react
import React, { useEffect } from 'react';
// navigation
import RootNavigator from './app/navigation/RootNavigator';
import RNBootSplash from 'react-native-bootsplash';
// redux
import { Provider } from 'react-redux';
import { store } from 'store/store';

declare const global: { HermesInternal: null | {} };

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({ duration: 250 });
    }, 3000);
  }, []);

  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
