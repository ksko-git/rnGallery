import React from 'react';
import { Provider } from 'react-redux';
import { MainScreen } from './src/screens/MainScreen';
import Store from './src/store'

export default function App() {
  return (
    <Provider store={Store}>
      <MainScreen />
    </Provider> 
  );
}