import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routing/Routes';

const App: React.FC<unknown> = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
