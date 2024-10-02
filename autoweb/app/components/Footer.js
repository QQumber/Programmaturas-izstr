import Link from "next/link";
import styles from "./Footer.module.css";

export default function Kajene() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3 className={styles.title}>AutoWeb Pro</h3>
            <p>Jūsu uzticamais auto remonta partneris</p>
          </div>
          <div className={styles.column}>
            <h3 className={styles.title}>Ātrās saites</h3>
            <ul className={styles.links}>
              <li>
                <Link href="/">Sākums</Link>
              </li>
              <li>
                <Link href="/pakalpojumi">Pakalpojumi</Link>
              </li>
              <li>
                <Link href="/par-mums">Par mums</Link>
              </li>
              <li>
                <Link href="/kontakti">Kontakti</Link>
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3 className={styles.title}>Kontakti</h3>
            <p>Autoiela 123, Rīga, LV-1001</p>
            <p>Tālr.: +371 67890123</p>
            <p>E-pasts: info@autoweb.lv</p>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>
            &copy; {new Date().getFullYear()} AutoWeb Pro. Visas tiesības
            aizsargātas.
          </p>
        </div>
      </div>
    </footer>
  );
}
