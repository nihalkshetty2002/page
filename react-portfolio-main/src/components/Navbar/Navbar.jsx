import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu open/close
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close menu when clicking on a link
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={styles.navbar}>
      {/* Navbar Title */}
      <a className={styles.title} href="/">
        Portfolio
      </a>

      {/* Menu Section */}
      <div className={styles.menu}>
        {/* Menu Button (Hamburger Icon for Mobile) */}
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png") // Close Icon
              : getImageUrl("nav/menuIcon.png")  // Menu Icon
          }
          alt="menu-button"
          onClick={toggleMenu}
        />

        {/* Menu Items */}
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={closeMenu}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
