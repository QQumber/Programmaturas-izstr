"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./service.module.css";

export default function PakalpojumiPage() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/services")
      .then((response) => response.json())
      .then((data) => {
        // Ensure price is a number
        const processedData = data.map((service) => ({
          ...service,
          price: parseFloat(service.price),
        }));
        setServices(processedData);
      })
      .catch((error) => console.error("Error fetching services:", error));
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mūsu pakalpojumi</h1>
      <div className={styles.pakalpojumiGrid}>
        {services.map((service) => (
          <div key={service.id} className={styles.pakalpojumsCard}>
            <h2 className={styles.pakalpojumsTitls}>{service.name}</h2>
            <p className={styles.pakalpojumsApraksts}>{service.description}</p>
            <p className={styles.pakalpojumsCena}>
              €
              {typeof service.price === "number"
                ? service.price.toFixed(2)
                : "N/A"}
            </p>
            <Link href="/rezervet" className={styles.button}>
              Rezervēt
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
