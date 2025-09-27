import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FirebaseAuth } from './';
import { FirebaseError } from 'firebase/app';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    console.log(result);
    const { displayName, email, photoURL, uid } = result.user;
    return {
      ok: true,
      displayName: displayName ?? '',
      email: email ?? '',
      photoUrl: photoURL ?? '',
      uid,
    };
  } catch (error: unknown) {
    console.log(error);
    if (error instanceof FirebaseError) {
      return {
        ok: false,
        errorMsg: `${error.code} - ${error.message}`,
      };
    }
    if (error instanceof Error) {
      return { ok: false, errorMsg: error.message };
    }
    return {
      ok: false,
      errorMsg: 'Error desconocido',
    };
  }
};

export const logoutFirebase = async () => {
  try {
    await FirebaseAuth.signOut();
    return {
      ok: true,
      message: 'Sesión cerrada exitosamente',
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: JSON.stringify(error),
    };
  }
};
