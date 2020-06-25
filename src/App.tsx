import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from 'global/Header/Header';
import Routes from 'routing/Routes';
import store from 'store';

const App: React.FC<unknown> = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  </Provider>
);

export default App;
