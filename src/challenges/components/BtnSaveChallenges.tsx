import { Save } from 'lucide-react';
import './btn-save-challenges.css';
export const BtnSaveChallenges = () => {
  return (
    <button className="save-btn">
      <Save className="save-icon" />
      <span>Guardar</span>
    </button>
  );
};
