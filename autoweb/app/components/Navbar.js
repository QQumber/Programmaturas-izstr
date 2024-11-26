"use client";

import Link from "next/link";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Navbar({ onLoginClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToFooter = (e) => {
    e.preventDefault();
    const footer = document.querySelector(".footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
      footer.classList.add("highlight-section");
      setTimeout(() => {
        footer.classList.remove("highlight-section");
      }, 2000);
    }
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
        <Link href="/pakalpojumi">Pakalpojumi</Link>
        <Link href="/par-mums">Par mums</Link>
        <Link href="/kontakti" onClick={scrollToFooter}>
          Kontakti
        </Link>
        <Link href="/rezervet" className="btn-primary">
          Rezervēt
        </Link>
        <div className="btn-secondary" onClick={onLoginClick}>
          Pieslēgties
        </div>
      </div>
    </nav>
  );
}
