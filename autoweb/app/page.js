import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Laipni lūgti AutoWeb</h1>
          <p className={styles.subtitle}>
            Jūsu uzticamais partneris visām auto remonta vajadzībām. Ekspertu
            serviss, godīgas cenas un ātrs darba izpildes laiks.
          </p>
          <div className={styles.buttonGroup}>
            <Link href="/rezervet" className={styles.button}>
              Rezervēt vizīti
            </Link>
            <Link href="/pakalpojumi" className={styles.buttonOutline}>
              Mūsu pakalpojumi
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Kāpēc izvēlēties mūs</h2>
          <div className={styles.featureGrid}>
            {[
              {
                title: "Eksperti mehāniķi",
                description:
                  "Mūsu sertificētā komanda nodrošina augstākās kvalitātes servisu jūsu automašīnai.",
                icon: "👨‍🔧",
              },
              {
                title: "Moderns aprīkojums",
                description:
                  "Mēs izmantojam jaunākās diagnostikas un remonta iekārtas precīziem rezultātiem.",
                icon: "🔧",
              },
              {
                title: "Caurspīdīga cenu politika",
                description:
                  "Saņemiet detalizētas tāmes un godīgas cenas visiem mūsu pakalpojumiem.",
                icon: "💰",
              },
              {
                title: "Ātrs darba izpildes laiks",
                description:
                  "Mēs novērtējam jūsu laiku un cenšamies pabeigt remontdarbus pēc iespējas ātrāk.",
                icon: "⏱️",
              },
            ].map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Gatavi sākt?</h2>
          <p className={styles.ctaDescription}>
            Rezervējiet vizīti jau šodien un izbaudiet AutoFix Pro
            priekšrocības.
          </p>
          <Link href="/rezervet" className={styles.button}>
            Rezervēt tagad
          </Link>
        </div>
      </section>
    </>
  );
}
