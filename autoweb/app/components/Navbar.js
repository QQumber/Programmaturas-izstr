"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navigacija() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          AutoWeb
        </Link>
        <div className={styles.menuToggle} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
          <li>
            <Link href="/">Sākums</Link>
          </li>
          <li>
            <Link href="/services">Pakalpojumi</Link>
          </li>
          <li>
            <Link href="/par-mums">Par mums</Link>
          </li>
          <li>
            <Link href="/contact">Kontakti</Link>
          </li>
          <li>
            <Link href="/book" className={styles.button}>
              Rezervēt vizīti
            </Link>
          </li>
          <li>
            <Link href="/login" className={styles.adminButton}>
              Darbinieku/Admin pieslēgšanās
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
