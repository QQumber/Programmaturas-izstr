import styles from "./book.module.css";

export default function RezervetPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Rezervēt vizīti</h1>
      <form className={styles.form}>
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
          <label htmlFor="service">Nepieciešamais pakalpojums</label>
          <select id="service" name="service" required>
            <option value="">Izvēlieties pakalpojumu</option>
            <option value="oil-change">Eļļas maiņa</option>
            <option value="brake-service">Bremžu apkope</option>
            <option value="tire-rotation">Riepu rotācija</option>
            <option value="engine-diagnostic">Dzinēja diagnostika</option>
            <option value="other">Cits</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Papildu informācija</label>
          <textarea id="message" name="message" rows="4"></textarea>
        </div>
        <button type="submit" className={styles.button}>
          Iesniegt pieprasījumu
        </button>
      </form>
    </div>
  );
}
