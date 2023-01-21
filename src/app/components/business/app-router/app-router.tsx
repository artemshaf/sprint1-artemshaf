import { Navigate, Route, Routes } from 'react-router-dom';

import { authRoutes, publicRoutes } from '../../../data';

export const AppRouter = () => (
  <Routes>
    {publicRoutes.map(({ element, path }) => (
      <Route key={path} path={path} element={element} />
    ))}
    {authRoutes.map(({ element, path }) => (
      <Route key={path} path={path} element={element} />
    ))}
    <Route path='*' key='route-all' element={<Navigate to='/' replace={true} />} />
  </Routes>
);
