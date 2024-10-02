"use client";

import { useState, useEffect } from "react";
import styles from "./book.module.css";

export default function RezervetPage() {
  const [services, setServices] = useState([]);
  const [message, setMessage] = useState("");
  const [isCustomService, setIsCustomService] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/services")
      .then((response) => response.json())
      .then((data) => {
        const processedData = data.map((service) => ({
          ...service,
          price: parseFloat(service.price),
        }));
        setServices(processedData);
      })
      .catch((error) => console.error("Error fetching services:", error));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const bookingData = Object.fromEntries(formData.entries());

    // If it's a custom service, set the serviceId to null and include the custom notes
    if (isCustomService) {
      bookingData.serviceId = null;
      bookingData.customServiceNotes = formData.get("customServiceNotes");
    }

    try {
      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        setMessage("Rezervācija veiksmīgi izveidota!");
        event.target.reset();
        setIsCustomService(false);
      } else {
        setMessage("Kļūda veidojot rezervāciju. Lūdzu, mēģiniet vēlreiz.");
      }
    } catch (error) {
      console.error("Error creating booking:", error);
      setMessage("Kļūda veidojot rezervāciju. Lūdzu, mēģiniet vēlreiz.");
    }
  };

  const handleServiceChange = (event) => {
    setIsCustomService(event.target.value === "custom");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Rezervēt vizīti</h1>
      {message && <p className={styles.message}>{message}</p>}
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Vārds</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">E-pasts</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone">Tālrunis</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="date">Vēlamais datums</label>
          <input type="date" id="date" name="date" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="serviceId">Nepieciešamais pakalpojums</label>
          <select
            id="serviceId"
            name="serviceId"
            required
            onChange={handleServiceChange}
          >
            <option value="">Izvēlieties pakalpojumu</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name} - €
                {typeof service.price === "number"
                  ? service.price.toFixed(2)
                  : "N/A"}
              </option>
            ))}
            <option value="custom">Pielāgots pakalpojums</option>
          </select>
        </div>
        {isCustomService && (
          <div className={styles.formGroup}>
            <label htmlFor="customServiceNotes">
              Pielāgota pakalpojuma apraksts
            </label>
            <textarea
              id="customServiceNotes"
              name="customServiceNotes"
              rows="4"
              required
              placeholder="Lūdzu, aprakstiet nepieciešamo pakalpojumu"
            ></textarea>
          </div>
        )}
        <button type="submit" className={styles.button}>
          Iesniegt pieprasījumu
        </button>
      </form>
    </div>
  );
}
