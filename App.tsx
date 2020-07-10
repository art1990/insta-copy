// react
import React, { useEffect } from 'react';
// navigation
import RootNavigator from './app/navigation/RootNavigator';
import RNBootSplash from 'react-native-bootsplash';

declare const global: { HermesInternal: null | {} };

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({ duration: 250 });
    }, 3000);
  }, []);

  return <RootNavigator />;
};

export default App;
