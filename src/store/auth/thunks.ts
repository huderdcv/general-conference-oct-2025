import Swal from 'sweetalert2';
import { logoutFirebase, signInWithGoogle } from '../../firebase';
import { clearChallengesLogout } from '../challenges';
// import type { AppDispatch, RootState } from '../store';
import type { AppDispatch } from '../store';
import { checkingCredentials, login, logout } from './authSlice';

export const startGoogleSignIn = (navigate: (path: string) => void) => {
  // return async (dispatch: AppDispatch, getState: RootState) => {
  return async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();
    if (!result.ok) {
      return dispatch(
        logout({ errorMsg: result.errorMsg || 'error desconocido' })
      );
    }
    const { uid, displayName, email, photoUrl } = result;
    dispatch(
      login({
        uid: uid!,
        displayName: displayName!,
        email: email!,
        photoUrl: photoUrl!,
      })
    );

    navigate('/desafios');

    //alert
    Swal.fire({
      title: '¡Sesión iniciada!',
      text: 'Ahora puedes ver los desafíos y guardar tu progreso.',
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
  };
};

export const startLogout = () => {
  return async (dispatch: AppDispatch) => {
    const { ok, message } = await dispatch(logoutFirebase);
    if (!ok) return alert(message);
    dispatch(logout({ errorMsg: null }));
    dispatch(clearChallengesLogout());
    //alert
    Swal.fire({
      title: '¡Sesión cerrada!',
      text: 'Te esperamos de nuevo para ver tus desafios.',
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
  };
};
