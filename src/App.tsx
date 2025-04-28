import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PageRoutes from './PageRoutes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <PageRoutes />
    </BrowserRouter>
  );
};

export default App;
