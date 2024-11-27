"use client";

import React, { useState } from "react";
import { useAuth } from '../context/AuthContext';

export default function RegisterPopup({ isOpen, onClose }) {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    password: "",
    rePassword: "",
    phone: "",
    role: "client"
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

    if (formData.password !== formData.rePassword) {
      setError("Paroles nesakrīt!");
      return;
    }

    try {
      const response = await fetch('/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
          name: formData.name,
          phone: formData.phone,
          role: formData.role
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
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
        <h2 className="popup-title">Izveidot profilu</h2>
        <p className="popup-subtitle">Lūdzu, aizpildiet reģistrācijas formu</p>
        {error && <p className="error-message" style={{color: 'red', textAlign: 'center'}}>
          {error === 'Username already exists' ? 'Lietotājvārds jau eksistē' : error}
        </p>}
        <form className="popup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Lietotājvārds</label>
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
            <label htmlFor="name">Vārds, Uzvārds</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Ievadiet vārdu un uzvārdu" 
              required 
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Parole</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Ievadiet paroli" 
              required 
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="rePassword">Atkārtoti parole</label>
            <input 
              type="password" 
              id="rePassword" 
              placeholder="Atkārtoti ievadiet paroli" 
              required 
              value={formData.rePassword}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Telefona numurs</label>
            <input 
              type="tel" 
              id="phone" 
              placeholder="Ievadiet telefona numuru" 
              required 
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn-submitLogin">
            Reģistrēties
          </button>
        </form>
      </div>
    </div>
  );
}
