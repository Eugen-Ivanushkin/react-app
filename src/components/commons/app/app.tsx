import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import 'regenerator-runtime/runtime';

//components
import AppRouter from '../app-router';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
