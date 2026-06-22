import { useState } from 'react';

/**
 * Navbar
 * - Renders the fixed top navigation bar.
 * - Uses useState to toggle the mobile hamburger menu open/closed.
 * - Closes the menu automatically when any nav link is clicked.
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <h2 className="logo">
        <a href="#home">david<span>hndz</span></a>
      </h2>

      {/* Hamburger button — visible only on mobile (CSS handles display) */}
      <button
        className={`hamburger${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Nav links — "open" class makes them visible on mobile */}
      <ul id="nav-links" className={menuOpen ? 'open' : ''}>
        <li><a href="#me"         onClick={handleLinkClick}>me</a></li>
        <li><a href="#experience" onClick={handleLinkClick}>experience</a></li>
        <li><a href="#projects"   onClick={handleLinkClick}>projects</a></li>
        <li><a href="#contact"    onClick={handleLinkClick}>contact</a></li>
      </ul>
    </nav>
  );
}
