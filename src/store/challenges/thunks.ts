import { doc, getDoc, setDoc } from 'firebase/firestore/lite';
import type { AppDispatch, RootState } from '../store';
import {
  offSavingProgress,
  onSavingProgress,
  setChallengesProgress,
} from './challengesSlice';
import { FirebaseDB } from '../../firebase';

export const startChallengesState = () => {
  return async (dispatch: AppDispatch, getstate: () => RootState) => {
    dispatch(onSavingProgress());
    const { uid } = getstate().auth;
    const { challengesProgress, completedCount, allCompleted } =
      getstate().challenges;
    const newStateChallenges = {
      challengesProgress,
      completedCount,
      allCompleted,
    };
    const docRef = doc(FirebaseDB, `users/${uid}/challenges/state`);
    await setDoc(docRef, newStateChallenges, { merge: true });
    dispatch(offSavingProgress());
  };
};

export const startLoadingChallengesState = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const { uid } = getState().auth;
    const docRef = doc(FirebaseDB, `users/${uid}/challenges/state`);
    const docChallengesState = await getDoc(docRef);
    const challengesProgress =
      docChallengesState.data()?.challengesProgress ?? null;
    dispatch(setChallengesProgress(challengesProgress));
  };
};
