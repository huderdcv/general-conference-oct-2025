import { useDispatch } from 'react-redux';
import { startGoogleSignIn } from '../../store/auth/thunks';
import { IoLogoGoogle } from 'react-icons/io5';
import type { AppDispatch } from '../../store';

export const BtnSigninGoogle = () => {
  const dispatch: AppDispatch = useDispatch();

  const handleGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };
  return (
    <button
      onClick={handleGoogleSignIn}
      className="action-login btn btn-primary"
    >
      <IoLogoGoogle className="login-icon" />
      <span>Iniciar Sesión</span>
    </button>
  );
};
