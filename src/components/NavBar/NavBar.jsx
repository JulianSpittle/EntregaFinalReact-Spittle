import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-secondary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Core Builds
        </a>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Placas de Video
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Procesadores
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Memorias RAM
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Motherboards
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Gabinetes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Coolers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Fuentes
              </a>
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
