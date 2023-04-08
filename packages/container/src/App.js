import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Headers from './components/Header';
import MarketingApp from './components/MarketingApp';

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Headers />
        <MarketingApp />
      </div>
    </BrowserRouter>
  );
};
