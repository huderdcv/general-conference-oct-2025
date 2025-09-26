import { Route, Routes } from 'react-router';
import { GeneralPage } from '../general';
import { ChallengesPage } from '../challenges';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<GeneralPage />} />
      <Route path="/challenges/*" element={<ChallengesPage />} />
    </Routes>
  );
};
