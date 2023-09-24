import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <h6 className="navbar-brand">Tierlists</h6>
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
            <h6 className="nav-link">
              .<span className="sr-only">(current)</span>
            </h6>
          </li>
          <li className="nav-item">
            <h6 className="nav-link">.</h6>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
