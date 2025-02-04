import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Portfolio Gustavo Chiquitin",
  description: "Portfolio DEV",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
