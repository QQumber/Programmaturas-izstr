import styles from "./contact.module.css";

export default function KontaktiPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sazinies ar mums</h1>
      <div className={styles.content}>
        <div className={styles.contactInfo}>
          <h2 className={styles.subtitle}>Kontaktinformācija</h2>
          <p>
            <strong>Adrese:</strong> Autoiela 123, Rīga, LV-1001
          </p>
          <p>
            <strong>Tālrunis:</strong> +371 67890123
          </p>
          <p>
            <strong>E-pasts:</strong> info@autoweb.lv
          </p>
          <h3 className={styles.subtitle}>Darba laiks</h3>
          <p>Pirmdiena - Piektdiena: 8:00 - 18:00</p>
          <p>Sestdiena: 9:00 - 15:00</p>
          <p>Svētdiena: Slēgts</p>
        </div>
        <form className={styles.form}>
          <h2 className={styles.subtitle}>Sazinies ar mums</h2>
          <div className={styles.formGroup}>
            <label htmlFor="name">Vārds</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">E-pasts</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Ziņojums</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit" className={styles.button}>
            Nosūtīt ziņojumu
          </button>
        </form>
      </div>
    </div>
  );
}
