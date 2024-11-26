import React from "react";

export default function RegisterPopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2 className="popup-title">Profila Izveide</h2>
        <form className="popup-form">
          <div className="form-group">
            <label htmlFor="username">Lietotajvards</label>
            <input type="text" id="username" placeholder="Ievadiet savu lietotājvārdu" required />
          </div>
          <div className="form-group">
            <label htmlFor="name">Vārds</label>
            <input type="text" id="name" placeholder="Ievadiet savu vārdu" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Parole</label>
            <input type="password" id="password" placeholder="Ievadiet paroli" required />
          </div>
          <div className="form-group">
            <label htmlFor="rePassword">Atkātoti parole</label>
            <input type="password" id="rePassword" placeholder="Atkārtoti ievadiet paroli" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Telefona numurs</label>
            <input type="tel" id="phone" placeholder="Ievadiet telefona numuru" required />
          </div>
          <button type="submit" className="btn-submitLogin">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
