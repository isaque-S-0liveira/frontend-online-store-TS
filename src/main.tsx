import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import App from './App.tsx';
import './index.css';
import SearchProductsProvider from './context/SearchProductsProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SearchProductsProvider>
      <BrowserRouter basename="/frontend-online-store-TS">
        <App />
      </BrowserRouter>
    </SearchProductsProvider>
  </React.StrictMode>,

);
