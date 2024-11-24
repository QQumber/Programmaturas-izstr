import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  {
    category: "Regulārā Apkope",
    items: [
      { name: "Eļļas un filtra maiņa", price: "45-70" },
      { name: "Gaisa filtra nomaiņa", price: "20-35" },
      { name: "Degvielas filtra nomaiņa", price: "40-80" },
      { name: "Bremžu šķidruma maiņa", price: "45-70" },
    ],
  },
  {
    category: "Bremžu Sistēma",
    items: [
      { name: "Bremžu kluču nomaiņa (priekšā)", price: "60-100" },
      { name: "Bremžu disku nomaiņa (priekšā)", price: "150-250" },
      { name: "Bremžu kluču nomaiņa (aizmugurē)", price: "50-90" },
      { name: "Bremžu disku nomaiņa (aizmugurē)", price: "130-220" },
    ],
  },
  {
    category: "Dzinēja Remonts",
    items: [
      { name: "Aizdedzes sveču nomaiņa", price: "40-80" },
      { name: "Ģeneratora nomaiņa", price: "200-400" },
      { name: "Startera nomaiņa", price: "150-300" },
      { name: "Dzinēja diagnostika", price: "40-70" },
    ],
  },
  {
    category: "Piekare un Ritošā Daļa",
    items: [
      { name: "Amortizatoru nomaiņa (2 gab.)", price: "200-400" },
      { name: "Riteņu gultņu maiņa", price: "80-150" },
      { name: "Piekares sviru nomaiņa", price: "100-200" },
      { name: "Riepu maiņa un balansēšana", price: "40-60" },
    ],
  },
];

export default function Services() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <section className="services-hero">
          <h1>Mūsu Pakalpojumi</h1>
          <p>
            Piedāvājam plašu auto remonta un apkopes pakalpojumu klāstu ar
            konkurētspējīgām cenām
          </p>
        </section>

        <section className="services-grid">
          {services.map((category, index) => (
            <div key={index} className="service-category">
              <h2>{category.category}</h2>
              <div className="service-items">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="service-item">
                    <span className="service-name">{item.name}</span>
                    <span className="service-price">€{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="service-note">
          <p>
            * Norādītās cenas ir aptuvenas un var mainīties atkarībā no auto
            markas, modeļa un nepieciešamo rezerves daļu cenām. Precīzu cenu
            varēsim noteikt pēc auto apskates.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
