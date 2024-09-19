import { useState } from "react";
import "./Header.css";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleHamburgerMenu = () => {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 300);
    } else {
      setIsOpen(true);
      setIsClosing(false);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <h1 className="title">Milenas tårtor</h1>
      <div
        className={`burger-menu ${isOpen ? "open" : ""}`}
        onClick={toggleHamburgerMenu}
      >
        <div className="strech strech--1"></div>
        <div className="strech strech--2"></div>
        <div className="strech strech--3"></div>
      </div>

      {(isOpen || isClosing) && ( // Visa menyn om den är öppen eller stängs
        <nav
          className={`nav-menu ${isOpen ? "open" : ""} ${
            isClosing ? "closing" : ""
          }`}
        >
          <ul className="menus-box">
            <li onClick={toggleDropdown} className="li dropdown-toggle">
              Cakes
            </li>
            {isDropdownOpen && (
              <ul className="dropdown">
                <li>
                  <a href="/wedding-cakes">Show Wedding Cakes</a>
                </li>
                <li>
                  <a href="/kids-cake">Show Birthday Cakes</a>
                </li>
                <li>
                  <a href="/regular-cake">Show Regular Cakes</a>
                </li>
                <li>
                  <a href="/cup-cake">Show Cup Cakes</a>
                </li>
              </ul>
            )}
            <li className="li">
              <a href="/about">About</a>
            </li>
            <li className="li">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
