import CartWidget from "./CartWidget";
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="NavBar navbar-expand-lg bg-body-secondary">
      <div className="container-fluid">
        <Link to='/'>
          <h3>Core Builds</h3>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="Categories collapse navbar-collapse" id="navbarSupportedContent"> 
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to={`/category/Placas De Video`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Placas de Video</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/category/Procesadores`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Procesadores</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/category/Memorias RAM`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Memorias RAM</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/category/Motherboards`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Motherboards</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/category/Gabinetes`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Gabinetes</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/category/Coolers`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Coolers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/category/Fuentes`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Fuentes</NavLink>
            </li>
          </ul>
          <div className="d-flex">
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
