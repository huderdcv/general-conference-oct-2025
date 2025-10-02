import React, { useState } from 'react';
import {
  BookOpen,
  Users,
  Mail,
  Share2,
  Edit3,
  MessageSquareQuote,
  Sparkles,
  ScanEye,
  CheckCircle,
  ClipboardList,
  Award,
  Calendar,
} from 'lucide-react';
import './challenges-page.css';
import { Footer, Navbar } from '../../ui';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import { BtnSaveChallenges, ChallengeCard } from '../components';

interface Challenge {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  completed: boolean;
}

export const ChallengesPage = () => {
  const { completedCount } = useSelector(
    (state: RootState) => state.challenges
  );

  const [challenges] = useState<Challenge[]>([
    {
      id: 1,
      title: 'Invitación personalizada',
      description:
        'Crea una invitación especial para un amigo o familiar no miembro y comparteselo',
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

  // const completedCount = challenges.filter(
  //   (challenge) => challenge.completed
  // ).length;
  // const totalCount = challenges.length;
  const progressPercentage = (completedCount / 8) * 100;

  return (
    <>
      <Navbar colorLink="#af7b04" colorHover="#7d5803" />
      <section id="desafios" className="app-challenges">
        <div className="container">
          {/* Header */}
          <header className="header-challenges">
            <h1 className="title">Desafíos de la Conferencia</h1>
            <ul className="desafios-info">
              <li>
                <CheckCircle className="icon green" />
                <span>
                  Realiza cada desafío antes, durante y después de la
                  Conferencia General.
                </span>
              </li>
              <li>
                <ClipboardList className="icon blue" />
                <span>
                  Márcalos a medida que los cumplas y guarda tu progreso con el
                  botón azul <strong>Guardar</strong>.
                </span>
              </li>
              <li>
                <Award className="icon yellow" />
                <span>
                  ¡Si los completas todos, recibirás un reconocimiento especial
                  de la estaca!
                </span>
              </li>
              <li>
                <Calendar className="icon red" />
                <span>
                  El evento finaliza el <strong>19 de octubre</strong>.
                  ¡Asegúrate de completar tus desafíos a tiempo!
                </span>
              </li>
            </ul>
          </header>
          {/* Progress Section */}
          <section className="progress-section">
            <div className="progress-info">
              <h2 className="progress-title">Progreso</h2>
              <span className="progress-count">
                {completedCount} de {8} completado
              </span>
            </div>
            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <p className="progress-message">
              {completedCount === 8 ? (
                <>
                  <span>🌟 ¡Felicidades! Completaste todos los desafíos.</span>
                  <span style={{ display: 'block' }}>
                    Envía un WhatsApp al Hno. Huder (970151568) para coordinar
                    tu reconocimiento de la estaca 📲✨.
                  </span>
                </>
              ) : (
                `¡No te detengas! Estás avanzando con mucha luz.`
              )}
            </p>
          </section>
          {/* Challenges Grid */}
          <section className="challenges-section">
            <div className="challenges-grid">
              {challenges.map((challenge) => (
                <ChallengeCard key={challenge.id} challenge={challenge} />
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
      </section>
      <BtnSaveChallenges />
      <Footer />
    </>
  );
};
