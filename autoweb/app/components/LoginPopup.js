import React from "react";

export default function LoginPopup({ isOpen, onClose, onCreateAccountClick }) {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2 className="popup-title">Welcome Back!</h2>
        <p className="popup-subtitle">Please log in to your account</p>
        <form className="popup-form">
          <div className="form-group">
            <label htmlFor="email">Email or Username</label>
            <input type="email" id="email" placeholder="epasts vai lietotajvards" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Ievadiet savu paroli" required />
          </div>
          <button type="submit" className="btn-submitLogin">
            Login
          </button>
        </form>
        <p className="popup-footer">
          Nav profila?{" "}
          <button className="link-button" onClick={onCreateAccountClick}>
            Izveidot Profilu
          </button>
        </p>
      </div>
    </div>
  );
}
