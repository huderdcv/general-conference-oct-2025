import { IoLogoFacebook, IoLogoTiktok } from 'react-icons/io5';

import './footer.css';
import { Link } from 'react-router';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* logo col */}
        <div className="logo-col">
          <a href={'#'} className="logo-box">
            <img
              src={`/logo-estaca.png`}
              alt="Logo de la estaca Ayacucho"
              width={900}
              height={1203}
              className="footer-logo-img"
            />
            <span className="footer-logo-text">EstacaAyacucho</span>
          </a>
          <p className="copyright-text">Copyright &copy;2025</p>
        </div>
        {/* address col */}
        <div className="address-col">
          <p className="address-title">Contáctanos</p>
          <div>
            <ul className="footer-social-links">
              <li>
                <a
                  href="https://www.facebook.com/estaca.ayacuchoperu?locale=es_LA"
                  target="_blank"
                  className="footer-social-link"
                >
                  <IoLogoFacebook className="footer-social-icon" />
                </a>
              </li>
              <li>
                <a
                  href={'https://www.tiktok.com/@estaca.ayacucho'}
                  target="_blank"
                  className="footer-social-a"
                >
                  <IoLogoTiktok className="footer-social-icon" />
                </a>
              </li>
            </ul>
          </div>
          <address>
            <p className="address">
              Jr. 28 de julio 716 (Alameda Valdelirios) - Huamanga
            </p>
          </address>
        </div>
        {/* nav-col */}
        <div className="nav-col">
          <ul className="footer-nav">
            <li>
              <a href={'#about-section'} className="footer-link">
                Inicio
              </a>
            </li>
            <li>
              <a href={'#horarios'} className="footer-link">
                Horarios
              </a>
            </li>
            <li>
              <a href={'#'} className="footer-link">
                Invitación
              </a>
            </li>
            <li>
              <Link to={'/desafios'} className="footer-link">
                Desafíos
              </Link>
            </li>
          </ul>
          <p className="footer-msg">
            Este sitio web especial es parte de la difusión local de la Estaca
            Ayacucho para la Conferencia General de Octubre 2025 y no proviene
            de un sitio oficial de La Iglesia de Jesucristo de los Santos de los
            Últimos Días.
          </p>
        </div>
      </div>
    </footer>
  );
};
