import "./globals.css";
import Navigacija from "./components/Navbar";
import Kajene from "./components/Footer";

export const metadata = {
  title: "AutoFix Pro - Jūsu uzticamais auto remonta serviss",
  description:
    "Profesionāli auto remonta pakalpojumi ar pieredzējušiem mehāniķiem un modernu aprīkojumu.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="lv">
      <body>
        <div className="flex flex-col min-h-screen">
          <Navigacija />
          <main className="flex-grow">{children}</main>
          <Kajene />
        </div>
      </body>
    </html>
  );
}
