"use client";

import Link from "next/link";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        AutoWeb
      </Link>
      <button className="menu-button" onClick={toggleMenu}>
        {isMenuOpen ? <IoClose /> : <IoMenu />}
      </button>
      <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <Link href="/sakums">Sākums</Link>
        <Link href="/pakalpojumi">Pakalpojumi</Link>
        <Link href="/par-mums">Par mums</Link>
        <Link href="/kontakti">Kontakti</Link>
        <Link href="/rezervet" className="btn-primary">
          Rezervēt
        </Link>
        <Link href="/pieslegties" className="btn-secondary">
          Pieslēgties
        </Link>
      </div>
    </nav>
  );
}
