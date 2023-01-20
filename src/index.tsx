import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from './app/app';
import './app/styles/mixins.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
