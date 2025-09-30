import { Save } from 'lucide-react';
import './btn-save-challenges.css';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../store';
import { startChallengesState } from '../../store/challenges';
export const BtnSaveChallenges = () => {
  const dispatch: AppDispatch = useDispatch();
  const handleBtn = () => {
    dispatch(startChallengesState());
  };
  return (
    <button onClick={handleBtn} className="save-btn">
      <Save className="save-icon" />
      <span>Guardar</span>
    </button>
  );
};
