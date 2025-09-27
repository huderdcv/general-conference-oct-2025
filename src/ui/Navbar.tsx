import { IoLogoGoogle } from 'react-icons/io5';
import './navbar.css';

export const Navbar = () => {
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
            <a className="main-nav-link" href="#">
              Desafios
            </a>
          </li>
        </ul>
      </nav>
      <div className="header-actions">
        <button className="action-login btn btn-primary">
          <IoLogoGoogle className="login-icon" />
          <span>Iniciar Sesión</span>
        </button>
      </div>
    </header>
  );
};
