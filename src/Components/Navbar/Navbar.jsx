import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';


function Navbar() {
  const [isResponsive, setIsResponsive] = useState(false);

  const toggleResponsiveClass = () => {
    setIsResponsive(!isResponsive);
  };

  return (
    <div>
      <nav className={`topnav ${isResponsive ? 'responsive' : ''}`} id="myTopnav">
        <ul>
          <li id='logo'>
            <NavLink to="/"  className={({ isActive }) => (isActive ? "active" : "" )}>
              BharatVarta
            </NavLink>
          </li>
          <li>
            <NavLink to="/"  className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/india" className={({ isActive }) => (isActive ? "active" : "")}>
              India
            </NavLink>
          </li>
          <li>
            <NavLink to="/world" className={({ isActive }) => (isActive ? "active" : "")}>
              World
            </NavLink>
          </li>
          <li>
            <NavLink to="/tech" className={({ isActive }) => (isActive ? "active" : "")}>
              Technology
            </NavLink>
          </li>
          <li>
            <NavLink to="/entertainment" className={({ isActive }) => (isActive ? "active" : "")}>
              Entertainment
            </NavLink>
          </li>
          <li>
            <NavLink to="/games" className={({ isActive }) => (isActive ? "active" : "")}>
              Games
            </NavLink>
          </li>
          <li>
            <NavLink to="/sports" className={({ isActive }) => (isActive ? "active" : "")}>
              Sports
            </NavLink>
          </li>
          <li>
            <NavLink to="/tesla" className={({ isActive }) => (isActive ? "active" : "")}>
              Tesla
            </NavLink>
          </li>
          <li>
            <NavLink to="/business" className={({ isActive }) => (isActive ? "active" : "")}>
              Business
            </NavLink>
          </li>
          <li>
            <NavLink to="/science" className={({ isActive }) => (isActive ? "active" : "")}>
              Science
            </NavLink>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <a href="#" className="icon" onClick={toggleResponsiveClass}>
          <i className="fa fa-bars"></i> {/* Font Awesome Hamburger Icon */}
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
