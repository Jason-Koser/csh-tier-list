function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a href="#" className="navbar-brand">
        Tierlists
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a href="#" className="nav-link">
              Library<span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Create New
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
