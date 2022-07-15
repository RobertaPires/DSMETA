import logo from '../../assets/img/logo.svg'
import './styles.css'
function Header() {
  return (
    <header>
          <div className="dsmeta-logo-container">
            <img src={logo} alt="" />
            <h1>DSMeta</h1>
            <p>
              Desenvolvido por
              <a href="https://www.instagram.com/rohpires2708/">@rohpires2708</a>
            </p>
          </div>
        </header>
  );
}

export default Header
