import { IoLogoGoogle, IoLogOut, IoPerson } from 'react-icons/io5';
import './navbar.css';
import { Link } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { startGoogleSignIn, startLogout } from '../store/auth/thunks';
import type { AppDispatch, RootState } from '../store';

export const Navbar = () => {
  const dispatch: AppDispatch = useDispatch();
  const { status, displayName } = useSelector((state: RootState) => state.auth);

  const handleGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  const handleLogout = () => {
    dispatch(startLogout());
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
            <Link
              className={`main-nav-link ${
                status !== 'authenticated' ? 'disabled-link' : ''
              }`}
              to={'/desafios'}
            >
              Desafíos
            </Link>
          </li>

          {/* {status === 'authenticated' && (
            <li>
              <Link className="main-nav-link" to={'/desafios'}>
                Desafíos
              </Link>
            </li>
          )} */}
        </ul>
      </nav>
      <div className="header-actions">
        {status == 'checking' ? (
          <p>cargando...</p>
        ) : status == 'not-authenticated' ? (
          <button
            onClick={handleGoogleSignIn}
            className="action-login btn btn-primary"
          >
            <IoLogoGoogle className="login-icon" />
            <span>Iniciar Sesión</span>
          </button>
        ) : (
          <div className="authenticated-box">
            <p className="user-box">
              <IoPerson className="user-icon" />
              <span className="user-name">{displayName?.split(' ')[0]}</span>
            </p>
            <button onClick={handleLogout} className="btn-logout">
              <IoLogOut className="logout-icon" />
              {/* <span>Salir</span> */}
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
