import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="lv">
      <body className="app-container">{children}</body>
    </html>
  );
}
