import { Route, Routes } from 'react-router';
import { GeneralPage } from '../general';
import { ChallengesPage } from '../challenges';
import { useCheckAuth } from '../hooks';

export const AppRouter = () => {
  const { status } = useCheckAuth();
  return (
    <Routes>
      <Route path="/*" element={<GeneralPage />} />
      <Route path="/desafios/*" element={<ChallengesPage />} />
    </Routes>
  );
};
