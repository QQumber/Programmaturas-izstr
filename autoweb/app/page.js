"use client";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Calendar from "./components/Calendar";
import Footer from "./components/Footer";
import ExpertCard from "./components/Expert-card";
import BookingComponent from "./components/Booking";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="app-container">
      <Navbar />

      <main>
        <section className="hero">
          <h1>Laipni lūgti AutoWeb</h1>
          <p>
            Jūsu uzticamais partneris visām auto remonta vajadzībām.
            <br />
            Ekspertu serviss godīgas cenas un ātra darba izpildes laiks.
          </p>
        </section>

        <section className="experts">
          <h2>Kāpēc izvēlēties mūs</h2>
          <div className="expert-cards">
            <ExpertCard
              icon="👨‍🔧"
              title="Eksperti mehāniķi"
              description="Mūsu sertificētā komanda nodrošina augstākās kvalitātes servisu jūsu automašīnai."
            />
            <ExpertCard
              icon="🔧"
              title="Eksperti mehāniķi"
              description="Mūsu sertificētā komanda nodrošina augstākās kvalitātes servisu jūsu automašīnai."
            />
            <ExpertCard
              icon="⏰"
              title="Eksperti mehāniķi"
              description="Mūsu sertificētā komanda nodrošina augstākās kvalitātes servisu jūsu automašīnai."
            />
          </div>
        </section>

        <section className="booking">
          <div className="calendar-section">
            <Calendar onDateSelect={setSelectedDate} />
          </div>
          <div className="booking-info">
            <h2>PIETEIKTIES UZ APSKATI</h2>
            <p>
              Ja tava automašīna prasa rūpes vai remontu, mēs esam šeit, lai
              palīdzētu! Tavs auto ir pelnījis vislabāko apkopi, un mūsu
              pieredzējušā komanda ir gatava nodrošināt kvalitatīvus
              pakalpojumus.
            </p>
            <BookingComponent selectedDate={selectedDate} />
          </div>
        </section>

        <section className="about">
          <h2>PAR MUMS</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Autoserviss &quot;AutoWeb&quot; ir jūsu uzticamais partneris automobiļu
                apkopē un remontā. Mēs lepojamies ar mūsu profesionālo komandu,
                kas kopš 2020. gada ir apkalpojusi simtiem apmierinātu klientu.
                Mūsu kvalificētie speciālisti ir apņēmušies nodrošināt visaugstāko
                kvalitāti un profesionalitāti katrā auto remonta darbā.
              </p>
            </div>
            <div className="about-image">
              <img
                src="/cars.jpg"
                alt="Auto service"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
