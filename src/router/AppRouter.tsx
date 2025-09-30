import { Route, Routes } from 'react-router';
import { GeneralPage } from '../general';
import { ChallengesPage } from '../challenges';
import { useCheckAuth } from '../hooks';
import { PrivateRoute } from './PrivateRoute';
import { useEffect } from 'react';
// import { getNumberTotalUsers } from '../helpers';
// import { fetchTotalUsers } from '../helpers';

export const AppRouter = () => {
  useEffect(() => {
    // getNumberTotalUsers();
  }, []);
  useCheckAuth();
  return (
    <Routes>
      <Route path="/*" element={<GeneralPage />} />
      <Route element={<PrivateRoute />}>
        <Route path="/desafios/*" element={<ChallengesPage />} />
      </Route>
    </Routes>
  );
};
