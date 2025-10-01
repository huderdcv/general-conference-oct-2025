import { useDispatch } from 'react-redux';
import { startGoogleSignIn } from '../../store/auth/thunks';
import { IoLogoGoogle } from 'react-icons/io5';
import type { AppDispatch } from '../../store';

import './btn-signin-google.css';
import { useNavigate } from 'react-router';

export const BtnSigninGoogle = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const handleGoogleSignIn = () => {
    dispatch(startGoogleSignIn(navigate));
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
