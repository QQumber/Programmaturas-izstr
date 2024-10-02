"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navigacija() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          AutoWeb
        </Link>
        <div
          className={`${styles.menuToggle} ${isOpen ? styles.open : ""}`}
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
          <li>
            <Link href="/" onClick={toggleMenu}>
              Sākums
            </Link>
          </li>
          <li>
            <Link href="/services" onClick={toggleMenu}>
              Pakalpojumi
            </Link>
          </li>
          <li>
            <Link href="/par-mums" onClick={toggleMenu}>
              Par mums
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={toggleMenu}>
              Kontakti
            </Link>
          </li>
          <li>
            <Link href="/book" className={styles.button} onClick={toggleMenu}>
              Rezervēt vizīti
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className={styles.adminButton}
              onClick={toggleMenu}
            >
              Darbinieku/Admin pieslēgšanās
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
