import { logoutFirebase, signInWithGoogle } from '../../firebase';
// import type { AppDispatch, RootState } from '../store';
import type { AppDispatch } from '../store';
import { checkingCredentials, login, logout } from './authSlice';

export const startGoogleSignIn = () => {
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
  };
};

export const startLogout = () => {
  console.log('bye bye');
  return async (dispatch: AppDispatch) => {
    const { ok, message } = await dispatch(logoutFirebase);
    if (!ok) return alert(message);
    dispatch(logout({ errorMsg: null }));
  };
};
