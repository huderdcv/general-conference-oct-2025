import React, { type ReactNode } from 'react';
import type { AppDispatch, RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { Check } from 'lucide-react';
import { updateChallengesProgress } from '../../store/challenges';

interface Props {
  challenge: {
    id: number;
    title: string;
    description: string;
    icon: ReactNode;
    completed: boolean;
  };
}
export const ChallengeCard = ({ challenge }: Props) => {
  const { challengesProgress } = useSelector(
    (state: RootState) => state.challenges
  );
  const dispatch: AppDispatch = useDispatch();

  const toggleChallenge = (id: number) => {
    dispatch(updateChallengesProgress(id));

    // setChallenges((prevChallenges) =>
    //   prevChallenges.map((challenge) =>
    //     challenge.id === id
    //       ? { ...challenge, completed: !challenge.completed }
    //       : challenge
    //   )
    // );
  };
  return (
    <div
      className={`challenge-card ${
        challengesProgress[
          `challenge${challenge.id}` as keyof typeof challengesProgress
        ]
          ? 'completed'
          : ''
      }`}
      onClick={() => toggleChallenge(challenge.id)}
    >
      <div className="challenge-icon">
        {challengesProgress[
          `challenge${challenge.id}` as keyof typeof challengesProgress
        ] ? (
          <div className="check-icon">
            <Check size={24} />
          </div>
        ) : (
          challenge.icon
        )}
      </div>
      <div className="challenge-content">
        <h3 className="challenge-title">{challenge.title}</h3>
        <p className="challenge-description">{challenge.description}</p>
      </div>
      <div className="challenge-status">
        <div
          className={`checkbox ${
            challengesProgress[
              `challenge${challenge.id}` as keyof typeof challengesProgress
            ]
              ? 'checked'
              : ''
          }`}
        >
          {challengesProgress[
            `challenge${challenge.id}` as keyof typeof challengesProgress
          ] && <Check size={16} />}
        </div>
      </div>
    </div>
  );
};
