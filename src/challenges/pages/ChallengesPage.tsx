import React, { useState } from 'react';
import {
  BookOpen,
  Users,
  Check,
  Mail,
  Share2,
  Edit3,
  MessageSquareQuote,
  Sparkles,
  ScanEye,
} from 'lucide-react';
import './challenges-page.css';
import { Footer, Navbar } from '../../ui';

interface Challenge {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  completed: boolean;
}

export const ChallengesPage = () => {
  const [challenges, setChallenges] = useState<Challenge[]>([
    {
      id: 1,
      title: 'Invitación personalizada',
      description:
        'Crea una invitación especial y compártela con un amigo o familiar',
      icon: <Mail size={24} />,
      completed: false,
    },
    {
      id: 2,
      title: 'Invita en redes sociales',
      description:
        'Publica algo relacionado a la conferencia en tus redes para que otros se enteren',
      icon: <Share2 size={24} />,
      completed: false,
    },
    {
      id: 3,
      title: 'Prepara tus preguntas',
      description:
        'Escribe algunas preguntas para recibir respuestas durante la conferencia',
      icon: <Edit3 size={24} />,
      completed: false,
    },
    {
      id: 4,
      title: 'Mira una sesión acompañado',
      description:
        'Participa con un no miembro o miembro inactivo; o ayúdale a conectarse por algún canal',
      icon: <Users size={24} />,
      completed: false,
    },
    {
      id: 5,
      title: 'Dos sesiones completas',
      description:
        'Participa en al menos dos sesiones completas en vivo de la Conferencia',
      icon: <ScanEye size={24} />,
      completed: false,
    },
    {
      id: 6,
      title: 'Respuestas a tus preguntas',
      description:
        'Registra las respuestas que recibas a tus preguntas preparadas',
      icon: <Sparkles size={24} />,
      completed: false,
    },
    {
      id: 7,
      title: 'Comparte una cita',
      description:
        'Elige una cita de un discurso y publícala en redes o compártela con tus contactos',
      icon: <MessageSquareQuote size={24} />,
      completed: false,
    },
    {
      id: 8,
      title: 'Estudia de nuevo',
      description:
        'Repite un discurso que te inspiró y compártelo con alguien que lo necesite.',
      icon: <BookOpen size={24} />,
      completed: false,
    },
  ]);

  const toggleChallenge = (id: number) => {
    setChallenges((prevChallenges) =>
      prevChallenges.map((challenge) =>
        challenge.id === id
          ? { ...challenge, completed: !challenge.completed }
          : challenge
      )
    );
  };

  const completedCount = challenges.filter(
    (challenge) => challenge.completed
  ).length;
  const totalCount = challenges.length;
  const progressPercentage = (completedCount / totalCount) * 100;

  return (
    <>
      <Navbar />
      <div className="app-challenges">
        <div className="container">
          {/* Header */}
          <header className="header-challenges">
            <h1 className="title">Desafíos de la Conferencia</h1>
            <p className="subtitle">
              Un viaje espiritual con pequeños retos para prepararte, participar
              y aplicar lo aprendido
            </p>
          </header>
          {/* Progress Section */}
          <section className="progress-section">
            <div className="progress-info">
              <h2 className="progress-title">Progreso</h2>
              <span className="progress-count">
                {completedCount} de {totalCount} completado
              </span>
            </div>
            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <p className="progress-message">
              {completedCount === totalCount
                ? '🌟 ¡Felicidades! Completaste todos los desafíos.'
                : `¡No te detengas! Estás avanzando con mucha luz.`}
            </p>
          </section>
          {/* Challenges Grid */}
          <section className="challenges-section">
            <div className="challenges-grid">
              {challenges.map((challenge) => (
                <div
                  key={challenge.id}
                  className={`challenge-card ${
                    challenge.completed ? 'completed' : ''
                  }`}
                  onClick={() => toggleChallenge(challenge.id)}
                >
                  <div className="challenge-icon">
                    {challenge.completed ? (
                      <div className="check-icon">
                        <Check size={24} />
                      </div>
                    ) : (
                      challenge.icon
                    )}
                  </div>
                  <div className="challenge-content">
                    <h3 className="challenge-title">{challenge.title}</h3>
                    <p className="challenge-description">
                      {challenge.description}
                    </p>
                  </div>
                  <div className="challenge-status">
                    <div
                      className={`checkbox ${
                        challenge.completed ? 'checked' : ''
                      }`}
                    >
                      {challenge.completed && <Check size={16} />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* Footer */}
          <footer className="footer-challenges">
            <p>
              "Por tanto, debéis seguir adelante con firmeza en Cristo, teniendo
              un fulgor perfecto de esperanza y amor por Dios y por todos los
              hombres". 2 Nefi 31: 20
            </p>
          </footer>
        </div>
      </div>
      <Footer />
    </>
  );
};
