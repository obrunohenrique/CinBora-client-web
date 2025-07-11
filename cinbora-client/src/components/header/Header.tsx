import './Header.css';
import logo_max from '../../../public/cinbora-logo-max.png'
import logo_min from '../../../public/cinbora-logo-min.png'
import { FaSearch, FaCarSide, FaUserCircle, FaChevronDown } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="header-container">
      {/* Lado esquerdo: ícone do usuário */}
      <div className="header-user-mobile">
        <FaUserCircle className="header-icon" />
        <FaChevronDown className="header-icon-small" />
      </div>

      {/* Logo centralizada em telas pequenas */}
      <div className="header-logo-wrapper">
        <img src={logo_min} alt="Logo CinBora" className="header-logo-image" />
      </div>

      {/* Lado direito: ícones de busca e oferta */}
      <div className="header-actions">
        <FaSearch className="header-icon" />
        <FaCarSide className="header-icon" />
      </div>

      {/* Em telas maiores, mostrar a versão completa */}
      <div className="header-full">
        <div className="header-left">
          <img src={logo_max} alt="Logo BlaBlaCar" className="header-logo-image" />
          <nav className="header-nav">
            <a href="#">Carona</a>
            <a href="#">Central de Ajuda</a>
          </nav>
        </div>

        <div className="header-right">
          <button className="header-button">
            <FaSearch className="header-icon" />
            <span>Procurar</span>
          </button>
          <button className="header-button">
            <FaCarSide className="header-icon" />
            <span>Oferecer carona</span>
          </button>
          <div className="header-user">
            <FaUserCircle className="header-icon" />
            <FaChevronDown className="header-icon-small" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
