import Link from "next/link";
import styles from "./service.module.css";

const pakalpojumi = [
  {
    title: "Eļļas maiņa",
    description:
      "Regulāra eļļas maiņa, lai nodrošinātu jūsu dzinēja nevainojamu darbību.",
    price: "Sākot no 39.99€",
  },
  {
    title: "Bremžu apkope",
    description: "Bremžu kluču, rotoru un citu komponentu pārbaude un nomaiņa.",
    price: "Sākot no 99.99€",
  },
  {
    title: "Riepu rotācija",
    description: "Vienmērīgs riepu nodilums un ilgāks riepu kalpošanas laiks.",
    price: "Sākot no 29.99€",
  },
  {
    title: "Dzinēja diagnostika",
    description:
      "Dzinēja problēmu identificēšana un novēršana ar mūsu modernajiem diagnostikas rīkiem.",
    price: "Sākot no 79.99€",
  },
  {
    title: "Akumulatora nomaiņa",
    description: "Automašīnas akumulatoru pārbaude un nomaiņa.",
    price: "Sākot no 89.99€",
  },
  {
    title: "Gaisa kondicionēšanas apkope",
    description:
      "A/C sistēmu pārbaude un remonts, lai jūs varētu baudīt vēsumu.",
    price: "Sākot no 69.99€",
  },
];

export default function PakalpojumiPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mūsu pakalpojumi</h1>
      <div className={styles.pakalpojumiGrid}>
        {pakalpojumi.map((pakalpojums, index) => (
          <div key={index} className={styles.pakalpojumsCard}>
            <h2 className={styles.pakalpojumsTitls}>{pakalpojums.title}</h2>
            <p className={styles.pakalpojumsApraksts}>
              {pakalpojums.description}
            </p>
            <p className={styles.pakalpojumsCena}>{pakalpojums.price}</p>
            <Link href="/rezervet" className={styles.button}>
              Rezervēt
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
