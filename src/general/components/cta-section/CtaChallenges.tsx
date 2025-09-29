import { IoPeopleSharp } from 'react-icons/io5';
import { Link } from 'react-router';

import './cta-challenges.css';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store';
import { BtnSigninGoogle } from '../../../ui/components';

export const CtaChallenges = () => {
  const { status } = useSelector((state: RootState) => state.auth);
  return (
    <section id="cta-desafios" className="cta-desafios">
      <div className="container">
        <div className="challenges-container grid grid--2-cols">
          <div className="challenges-box">
            <h2 className="challenges-title">
              Acepta los desafios y recibe inspiración en el camino
            </h2>
            <ul className="challenges-steps">
              <li>
                <p className="challenges-step">
                  <span className="step-number">01</span>
                  <span className="step-info">
                    Inicia sesión con tu cuenta Google.
                  </span>
                </p>
              </li>
              <li>
                <p className="challenges-step">
                  <span className="step-number">02</span>
                  <span className="step-info">
                    Dirigete a la vista de desafíos y cumple los retos.
                  </span>
                </p>
              </li>
              <li>
                <p className="challenges-step">
                  <span className="step-number">03</span>
                  <span className="step-info">
                    Completalos y recibe un reconocimiento especial.
                  </span>
                </p>
              </li>
            </ul>
            <div className="box-actions-info">
              {status !== 'authenticated' ? (
                <BtnSigninGoogle />
              ) : (
                <Link className="challenges-btn" to={'/desafios'}>
                  Ir a desafíos &rarr;
                </Link>
              )}
              <p className="participants">
                <IoPeopleSharp className="participants-icon" />
                <span className="participants-text">102 participando</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
