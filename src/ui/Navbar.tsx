import { IoCloseSharp, IoLogOut, IoMenuSharp, IoPerson } from 'react-icons/io5';
import './navbar.css';
// import { Link } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../store/auth/thunks';
import type { AppDispatch, RootState } from '../store';
import { BtnSigninGoogle } from './components';
import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
export const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const { status, displayName } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(startLogout());
  };
  return (
    <header className={`header ${navOpen ? 'nav-open' : ''} `}>
      <HashLink smooth className="header-logo" to="/#">
        <img
          className="header-logo-img"
          src={`${import.meta.env.BASE_URL}logo-estaca.png`}
          alt="Logo de la estaca Ayacucho"
        />
      </HashLink>
      <div onClick={() => setNavOpen(!navOpen)} className="header-menu">
        <nav className="header-nav">
          <ul className="main-nav-list">
            <li>
              <HashLink smooth className="main-nav-link" to="/#">
                Inicio
              </HashLink>
            </li>
            <li>
              <HashLink smooth className="main-nav-link" to="/#horarios">
                Horarios
              </HashLink>
            </li>
            <li>
              <HashLink smooth className="main-nav-link" to="/#cta-evento">
                Evento
              </HashLink>
            </li>
            <li>
              <HashLink smooth className="main-nav-link" to="/#cta-invitacion">
                Invitación
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                className={`main-nav-link ${
                  status !== 'authenticated' ? 'disabled-link' : ''
                }`}
                to={'/desafios#desafios'}
              >
                Mis desafíos
              </HashLink>
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
            <p className="verifying">verificando...</p>
          ) : status == 'not-authenticated' ? (
            <div className="container-btn-google">
              <BtnSigninGoogle />
            </div>
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
      </div>
      <button onClick={() => setNavOpen(!navOpen)} className="mobile-nav">
        {/* <button className="mobile-nav"> */}
        <IoMenuSharp className="icon-mobile-nav" name="menu-outline" />
        <IoCloseSharp className="icon-mobile-nav" name="close-outline" />
      </button>
    </header>
  );
};
