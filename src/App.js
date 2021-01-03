import React from 'react';
import { Provider } from 'react-redux';
import InboxScreen from './components/InboxScreen';
import './index.css';
import store from './lib/redux'


function App() {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}

export default App;
