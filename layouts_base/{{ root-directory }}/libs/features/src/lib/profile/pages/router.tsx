import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from '../constants';
import { Default } from './default/default';

export const Router: FC = () => {
  return (
    <Routes>
      <Route path={routes.DEFAULT.path} element={<Default />} />
    </Routes>
  );
};
