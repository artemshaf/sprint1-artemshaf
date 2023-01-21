import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import { AppWithLayout } from './app/app';

import './app/styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <AppWithLayout />
    </Suspense>
  </React.StrictMode>
);
