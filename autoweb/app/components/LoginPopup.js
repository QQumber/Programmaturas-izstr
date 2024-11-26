import React, { useState } from "react";
import { useAuth } from '../context/AuthContext';

export default function LoginPopup({ isOpen, onClose, onCreateAccountClick }) {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      login(data.user);
      onClose();
      
    } catch (err) {
      setError(err.message);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2 className="popup-title">Welcome Back!</h2>
        <p className="popup-subtitle">Please log in to your account</p>
        {error && <p className="error-message" style={{color: 'red', textAlign: 'center'}}>{error}</p>}
        <form className="popup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              id="username" 
              placeholder="Ievadiet lietotājvārdu" 
              required 
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Ievadiet savu paroli" 
              required 
              value={formData.password}
              onChange={handleChange}
            />
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
