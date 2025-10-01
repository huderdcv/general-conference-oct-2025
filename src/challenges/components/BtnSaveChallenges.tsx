import { Save } from 'lucide-react';
import './btn-save-challenges.css';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../store';
import { startChallengesState } from '../../store/challenges';
import Swal from 'sweetalert2';
import confetti from 'canvas-confetti';
export const BtnSaveChallenges = () => {
  const dispatch: AppDispatch = useDispatch();
  const handleBtn = () => {
    dispatch(startChallengesState());
    //alert
    Swal.fire({
      title: '¡Progreso guardado!',
      text: 'Sigue adelante en tu jornada de fe y aprendizaje.',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#3085d6',
      width: '50rem',
      customClass: {
        title: 'swal-title',
        htmlContainer: 'swal-text',
        confirmButton: 'my-confirm-btn',
      },
    });

    // animation
    confetti({
      particleCount: 350,
      spread: 170,
      origin: { y: 0.7 },
      zIndex: 9000,
    });
  };
  return (
    <button onClick={handleBtn} className="save-btn">
      <Save className="save-icon" />
      <span>Guardar</span>
    </button>
  );
};
