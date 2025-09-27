import { IoLogoGoogle } from 'react-icons/io5';
import './navbar.css';
import { Link } from 'react-router';
import { useDispatch } from 'react-redux';
import { startGoogleSignIn } from '../store/auth/thunks';
import type { AppDispatch } from '../store';

export const Navbar = () => {
  const dispatch: AppDispatch = useDispatch();
  const handleGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };
  return (
    <header className="header">
      <a className="header-logo" href="#">
        <img
          className="header-logo-img"
          src="/logo-estaca.png"
          alt="Logo de la estaca Ayacucho"
        />
      </a>
      <nav className="header-nav">
        <ul className="main-nav-list">
          <li>
            <a className="main-nav-link" href="#">
              Inicio
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#horarios">
              Horarios
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#">
              Invitación
            </a>
          </li>
          <li>
            <Link className="main-nav-link" to={'/desafios'}>
              Desafíos
            </Link>
          </li>
        </ul>
      </nav>
      <div className="header-actions">
        <button
          onClick={handleGoogleSignIn}
          className="action-login btn btn-primary"
        >
          <IoLogoGoogle className="login-icon" />
          <span>Iniciar Sesión</span>
        </button>
      </div>
    </header>
  );
};
