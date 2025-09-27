import { Route, Routes } from 'react-router';
import { GeneralPage } from '../general';
import { ChallengesPage } from '../challenges';
import { useCheckAuth } from '../hooks';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
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
