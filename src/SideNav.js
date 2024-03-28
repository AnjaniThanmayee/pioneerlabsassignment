import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./SideNav.css";

const SideNav = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const closeNavAndNavigate = () => {
    setShowNavbar(false); // Close the SideNav menu
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="menu-icon" onClick={handleShowNavbar}>
          <button>
            <img
              className="hamburger"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"
              alt="hamburger"
            />
          </button>
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/" onClick={closeNavAndNavigate}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/graphs" onClick={closeNavAndNavigate}>
                Graphs
              </NavLink>
            </li>
            <li>
              <NavLink to="/crypto" onClick={closeNavAndNavigate}>
                Crypto
              </NavLink>
            </li>
            <li>
              <NavLink to="/wallet" onClick={closeNavAndNavigate}>
                Wallet
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SideNav;
