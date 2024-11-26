"use client";

import Link from "next/link";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import LoginPopup from "./LoginPopup";
import RegisterPopup from "./RegisterPopup";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLoginPopup = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const toggleRegisterPopup = () => {
    setIsRegisterOpen(!isRegisterOpen);
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
    <>
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
          <div className="btn-secondary" onClick={toggleLoginPopup}>
            Pieslēgties
          </div>
        </div>
      </nav>

      <LoginPopup
        isOpen={isLoginOpen}
        onClose={toggleLoginPopup}
        onCreateAccountClick={() => {
          setIsLoginOpen(false);
          setIsRegisterOpen(true);
        }}
      />

      <RegisterPopup 
        isOpen={isRegisterOpen} 
        onClose={toggleRegisterPopup} 
      />
    </>
  );
}
