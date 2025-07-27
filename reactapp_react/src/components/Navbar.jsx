function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Bootstrap Buttons */}
      <div className="m-3">
        <button type="button" className="btn btn-primary m-1">
          Primary
        </button>
        <button type="button" className="btn btn-secondary m-1">
          Secondary
        </button>
        <button type="button" className="btn btn-success m-1">
          Success
        </button>
        <button type="button" className="btn btn-danger m-1">
          Danger
        </button>
        <button type="button" className="btn btn-warning m-1">
          Warning
        </button>
        <button type="button" className="btn btn-info m-1">
          Info
        </button>
        <button type="button" className="btn btn-light m-1">
          Light
        </button>
        <button type="button" className="btn btn-dark m-1">
          Dark
        </button>
        <button type="button" className="btn btn-link m-1">
          Link
        </button>
      </div>

      {/* Tailwind Test */}
      <div className="text-red-800 text-center font-bold text-xl">
        I am Tailwind CSS
      </div>
    </>
  );
}

export default Navbar;
