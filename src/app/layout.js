import "./globals.css";

export const metadata = {
  title: "Portfolio Gustavo Chiquitin",
  description: "Portfolio DEV",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
