import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../store';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuth } from '../firebase';
import { login, logout } from '../store/auth';
import { startLoadingChallengesState } from '../store/challenges';

export const useCheckAuth = () => {
  const { status } = useSelector((state: RootState) => state.auth);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, (user) => {
      if (!user) return dispatch(logout({ errorMsg: null }));
      const { uid, displayName, email, photoURL } = user;
      dispatch(
        login({
          uid,
          displayName: displayName ?? '',
          email: email ?? '',
          photoUrl: photoURL ?? '',
        })
      );
      dispatch(startLoadingChallengesState());
    });
  }, []);

  return { status };
};
