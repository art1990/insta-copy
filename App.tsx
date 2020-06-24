// react
import React from 'react';
// navigation
import RootNavigator from './app/navigation/RootNavigator';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return <RootNavigator />;
};

export default App;
