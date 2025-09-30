import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface ChallengesProgress {
  challenge1: boolean;
  challenge2: boolean;
  challenge3: boolean;
  challenge4: boolean;
  challenge5: boolean;
  challenge6: boolean;
  challenge7: boolean;
  challenge8: boolean;
}
interface ChallengesState {
  isSaving: boolean;
  challengesProgress: ChallengesProgress;
  completedCount: number;
  allCompleted: boolean;
}

const initialState: ChallengesState = {
  isSaving: false,
  challengesProgress: {
    challenge1: false,
    challenge2: false,
    challenge3: false,
    challenge4: false,
    challenge5: false,
    challenge6: false,
    challenge7: false,
    challenge8: false,
  },
  completedCount: 0,
  allCompleted: false,
};

export const challengesSlice = createSlice({
  name: 'challenges',
  initialState,
  reducers: {
    onSavingProgress: (state) => {
      state.isSaving = true;
    },
    offSavingProgress: (state) => {
      state.isSaving = false;
    },
    setChallengesProgress: (
      state,
      action: PayloadAction<ChallengesProgress | null>
    ) => {
      if (action.payload !== null) {
        state.challengesProgress = action.payload;
        state.completedCount = Object.values(state.challengesProgress).filter(
          (value) => value === true
        ).length;
        state.allCompleted = state.completedCount === 8;
      } else {
        state = initialState;
      }
    },
    updateChallengesProgress: (state, action: PayloadAction<number>) => {
      const key =
        `challenge${action.payload}` as keyof typeof state.challengesProgress;
      state.challengesProgress[key] = !state.challengesProgress[key];
      state.completedCount = Object.values(state.challengesProgress).filter(
        (value) => value === true
      ).length;
      state.allCompleted = state.completedCount === 8;
    },
    clearChallengesLogout: (state) => {
      // state = null;
      state.isSaving = false;
      state.challengesProgress = {
        challenge1: false,
        challenge2: false,
        challenge3: false,
        challenge4: false,
        challenge5: false,
        challenge6: false,
        challenge7: false,
        challenge8: false,
      };
      state.completedCount = 0;
      state.allCompleted = false;
    },
  },
});

export const {
  onSavingProgress,
  offSavingProgress,
  setChallengesProgress,
  updateChallengesProgress,
  clearChallengesLogout,
} = challengesSlice.actions;
export const challengesReducer = challengesSlice.reducer;
